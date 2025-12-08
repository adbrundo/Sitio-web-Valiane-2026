import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getDb } from "./db";
import { z } from "zod";
import { products, productBenefits, pageContent } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Products API
  products: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      
      const allProducts = await db.select().from(products).where(eq(products.active, true));
      
      // Fetch benefits for each product
      const productsWithBenefits = await Promise.all(
        allProducts.map(async (product) => {
          const benefits = await db
            .select()
            .from(productBenefits)
            .where(eq(productBenefits.productId, product.id));
          
          return {
            ...product,
            benefits,
          };
        })
      );
      
      return productsWithBenefits;
    }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        
        const product = await db
          .select()
          .from(products)
          .where(eq(products.slug, input.slug))
          .limit(1);
        
        if (!product.length) return null;
        
        const benefits = await db
          .select()
          .from(productBenefits)
          .where(eq(productBenefits.productId, product[0].id));
        
        return {
          ...product[0],
          benefits,
        };
      }),

    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          nameEn: z.string().optional(),
          nameEs: z.string().optional(),
          shortDescEn: z.string().optional(),
          shortDescEs: z.string().optional(),
          taglineEn: z.string().optional(),
          taglineEs: z.string().optional(),
          descriptionEn: z.string().optional(),
          descriptionEs: z.string().optional(),
          ingredientsEn: z.string().optional(),
          ingredientsEs: z.string().optional(),
          usageEn: z.string().optional(),
          usageEs: z.string().optional(),
          sensoryEn: z.string().optional(),
          sensoryEs: z.string().optional(),
          amazonLink: z.string().optional(),
          imageUrl: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        
        const db = await getDb();
        if (!db) throw new Error('Database not available');
        
        const { id, ...updateData } = input;
        
        await db
          .update(products)
          .set(updateData)
          .where(eq(products.id, id));
        
        return { success: true };
      }),
  }),

  // Page Content API
  pageContent: router({
    get: publicProcedure
      .input(z.object({ page: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        
        const content = await db
          .select()
          .from(pageContent)
          .where(eq(pageContent.page, input.page))
          .limit(1);
        
        return content.length > 0 ? content[0] : null;
      }),

    update: protectedProcedure
      .input(
        z.object({
          page: z.string(),
          titleEn: z.string().optional(),
          titleEs: z.string().optional(),
          contentEn: z.string().optional(),
          contentEs: z.string().optional(),
          metaDescriptionEn: z.string().optional(),
          metaDescriptionEs: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        
        const db = await getDb();
        if (!db) throw new Error('Database not available');
        
        const { page, ...updateData } = input;
        
        const existing = await db
          .select()
          .from(pageContent)
          .where(eq(pageContent.page, page))
          .limit(1);
        
        if (existing.length > 0) {
          await db
            .update(pageContent)
            .set(updateData)
            .where(eq(pageContent.page, page));
        } else {
          await db
            .insert(pageContent)
            .values({ page, ...updateData });
        }
        
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

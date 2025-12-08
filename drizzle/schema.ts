import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Products table for storing Valianė product information
 */
export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  nameEn: varchar("nameEn", { length: 255 }).notNull(),
  nameEs: varchar("nameEs", { length: 255 }).notNull(),
  shortDescEn: text("shortDescEn"),
  shortDescEs: text("shortDescEs"),
  taglineEn: varchar("taglineEn", { length: 255 }),
  taglineEs: varchar("taglineEs", { length: 255 }),
  descriptionEn: text("descriptionEn"),
  descriptionEs: text("descriptionEs"),
  ingredientsEn: text("ingredientsEn"),
  ingredientsEs: text("ingredientsEs"),
  usageEn: text("usageEn"),
  usageEs: text("usageEs"),
  sensoryEn: text("sensoryEn"),
  sensoryEs: text("sensoryEs"),
  amazonLink: varchar("amazonLink", { length: 255 }).notNull(),
  imageUrl: varchar("imageUrl", { length: 255 }),
  imageAlt: varchar("imageAlt", { length: 255 }),
  featured: boolean("featured").default(false),
  active: boolean("active").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;

/**
 * Product benefits table for storing individual benefit points
 */
export const productBenefits = mysqlTable("productBenefits", {
  id: int("id").autoincrement().primaryKey(),
  productId: int("productId").notNull(),
  benefitEn: text("benefitEn").notNull(),
  benefitEs: text("benefitEs").notNull(),
  order: int("order").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ProductBenefit = typeof productBenefits.$inferSelect;
export type InsertProductBenefit = typeof productBenefits.$inferInsert;

/**
 * Content table for editable page content
 */
export const pageContent = mysqlTable("pageContent", {
  id: int("id").autoincrement().primaryKey(),
  page: varchar("page", { length: 100 }).notNull().unique(),
  titleEn: varchar("titleEn", { length: 255 }),
  titleEs: varchar("titleEs", { length: 255 }),
  contentEn: text("contentEn"),
  contentEs: text("contentEs"),
  metaDescriptionEn: varchar("metaDescriptionEn", { length: 160 }),
  metaDescriptionEs: varchar("metaDescriptionEs", { length: 160 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PageContent = typeof pageContent.$inferSelect;
export type InsertPageContent = typeof pageContent.$inferInsert;

/**
 * Settings table for brand and site configuration
 */
export const settings = mysqlTable("settings", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Setting = typeof settings.$inferSelect;
export type InsertSetting = typeof settings.$inferInsert;

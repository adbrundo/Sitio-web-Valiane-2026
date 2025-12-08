CREATE TABLE `pageContent` (
	`id` int AUTO_INCREMENT NOT NULL,
	`page` varchar(100) NOT NULL,
	`titleEn` varchar(255),
	`titleEs` varchar(255),
	`contentEn` text,
	`contentEs` text,
	`metaDescriptionEn` varchar(160),
	`metaDescriptionEs` varchar(160),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pageContent_id` PRIMARY KEY(`id`),
	CONSTRAINT `pageContent_page_unique` UNIQUE(`page`)
);
--> statement-breakpoint
CREATE TABLE `productBenefits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`productId` int NOT NULL,
	`benefitEn` text NOT NULL,
	`benefitEs` text NOT NULL,
	`order` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `productBenefits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`nameEn` varchar(255) NOT NULL,
	`nameEs` varchar(255) NOT NULL,
	`shortDescEn` text,
	`shortDescEs` text,
	`taglineEn` varchar(255),
	`taglineEs` varchar(255),
	`descriptionEn` text,
	`descriptionEs` text,
	`ingredientsEn` text,
	`ingredientsEs` text,
	`usageEn` text,
	`usageEs` text,
	`sensoryEn` text,
	`sensoryEs` text,
	`amazonLink` varchar(255) NOT NULL,
	`imageUrl` varchar(255),
	`imageAlt` varchar(255),
	`featured` boolean DEFAULT false,
	`active` boolean DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`),
	CONSTRAINT `products_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(100) NOT NULL,
	`value` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `settings_id` PRIMARY KEY(`id`),
	CONSTRAINT `settings_key_unique` UNIQUE(`key`)
);

// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  json,
  jsonb,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `orderjuanethdev_${name}`);

export const orders = createTable("orders", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 256 }).notNull(),
  body: varchar("body", { length: 1024 }).notNull(),
  comms: varchar("comms", { length: 32 }).notNull(),
  references: jsonb("jsonb2").default([{ foo: "bar" }]),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  owner: varchar("owner", { length: 256 }).references(() => accounts.id),
});

export const accounts = createTable("accounts", {
  id: serial("id").primaryKey(),
  username: varchar("name", { length: 64 }).notNull(),
  desc: varchar("desc", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  iconUrl: varchar("iconUrl", { length: 1024 }),
});

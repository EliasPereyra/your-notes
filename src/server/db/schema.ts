// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `your-notes_${name}`);

export const notes = createTable(
  "note",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    title: text("title", { length: 256 }),
    description: text("desc"),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: int("updatedAt", { mode: "timestamp" }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
  }),
);

export const topics = createTable("topic", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title", { length: 40 }),
  // add the user and notes relations
});

export const authors = createTable("author", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 40 }).notNull(),
  email: text("name", { length: 40, mode: "text" }).notNull(),
  image: text("name"),
});

const accounts = createTable("account", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: text("userId"),
  type: text("type"),
  provider: text(""),
  providerAccountId: text("providerAccountId"),
  refresh_token: text("refreshToken"),
  refresh_token_expires_in: int("refreshTokenExpiresIn"),
  access_token: text("accessToken"),
  expires_at: int("expiresAt", { mode: "timestamp" }),
  token_type: text("tokenType"),
  scope: text("scope"),
  id_token: text("idToken"),
  session_state: text("sessionState"),
});

const session = createTable("session", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  sessionToken: text("sessionToken"),
  userId: text("userId"),
  expires: int("expires", { mode: "timestamp" }),
});

const verificationToken = createTable("verificationToken", {
  id: text("id"),
  token: text("token").unique(),
  expires: int("expires", { mode: "timestamp" }),
});

import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/db/schema.ts",
  driver: "libsql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["your-notes_*"],
} satisfies Config;

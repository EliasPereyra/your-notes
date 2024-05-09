CREATE TABLE notes (
  `id`  INTEGER PRIMARY KEY NOT NULL,
  `title` TEXT NOT NULL,
  `description` TEXT,
  `topicId` INTEGER,
  FOREIGN KEY (topicId) REFERENCES topics(id)
);

CREATE TABLE topics (
  `id` INTEGER PRIMARY KEY NOT NULL,
  `title` TEXT NOT NULL,
  `userId` INTEGER,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE users (
  `id` TEXT PRIMARY KEY NOT NULL,
  `name` TEXT NOT NULL,
  `email` TEXT NOT NULL,
  `image` TEXT
);

CREATE TABLE accounts (
  `userId` TEXT NOT NULL,
  `type` TEXT NOT NULL,
  `provider` TEXT NOT NULL,
  `providerAccountId` TEXT,
  `refresh_token` TEXT,
  `refresh_token_expires_in` INTEGER,
  `access_token` TEXT,
  `expires_at` TIMESTAMP,
  `token_type`  TEXT,
  `scope` TEXT,
  `id_token`  TEXT,
  `session_state` TEXT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE sessions (
  `sessionToken` TEXT PRIMAR KEY NOT NULL,
  `userId`  TEXT NOT NULL,
  `expires` TIMESTAMP NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE verificationTokens (
  `identifier`  TEXT NOT NULL,
  `token`  TEXT NOT NULL,
  `expires` TIMESTAMP
);

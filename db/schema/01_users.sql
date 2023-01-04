-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NOT NULL,
  quiz_name VARCHAR(255) NOT NULL,
  level BOOLEAN,
  category VARCHAR(255) NOT NULL,
  public BOOLEAN
);

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL,
  question VARCHAR(255) NOT NULL,
  choice_a VARCHAR(255) NOT NULL,
  choice_b VARCHAR(255) NOT NULL,
  choice_c VARCHAR(255) NOT NULL,
  choice_d VARCHAR(255) NOT NULL,
  answer VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS scores CASCADE;
CREATE TABLE scores (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id INTEGER NOT NULL,
  quiz_id INTEGER NOT NULL,
  score INTEGER NOT NULL
);



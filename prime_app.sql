
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "volunteer" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (1000),
	"first_name" VARCHAR (80),
	"last_name" VARCHAR (80),
	"created_at" TIMESTAMP
);

CREATE TABLE "admin" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (1000),
	"first_name" VARCHAR (80),
	"last_name" VARCHAR (80),
	"created_at" TIMESTAMP
);


CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar (1000),
	"complete" BOOLEAN
);

INSERT INTO "tasks" ("task", "complete")
VALUES ('Clean Bathrooms', FALSE);

CREATE TABLE "feedback" (
	"id" SERIAL PRIMARY KEY,
	"comments" TEXT,
	"issues" TEXT,
	"thank_yous" TEXT
);

CREATE TABLE "news" (
	"id" SERIAL PRIMARY KEY,
	"message" TEXT
);

CREATE TABLE "dogs" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80),
	"breed" VARCHAR (80),
	"age" VARCHAR (80),
	"arrived" VARCHAR (80),
	"notes" TEXT,
	"walked" BOOLEAN,
	"played" BOOLEAN,
	"favorite" BOOLEAN,
	"picture" VARCHAR (1000)
);

INSERT INTO "dogs" ("name", "breed", "age", "arrived", "notes", "walked", "played", "favorite", "picture")
VALUES ('Ted', 'Australian Shepherd/Mix', '6yrs 7mos', '05/06/2020', 'Im awesome!', 'FALSE', 'FALSE', 'FALSE', 'images/TedDog.jpg'), ('Spark Pug', 'Pug/Mix', '2yrs', '05/01/2020', 'One Smug Pug', 'FALSE', 'FALSE', 'FALSE', 'images/SparkPugDog.jpg'),
('Shotput', 'Rottweiler/Mix', '2mos', '05/04/2020', 'Tiny but Mighty!', 'FALSE', 'FALSE', 'FALSE', 'images/ShotputDog.jpg'),
('Ken Kane', 'Shepard/Mix', '7yrs', '04/21/2020', 'Hello!', 'FALSE', 'FALSE', 'FALSE', 'images/KenKaneDog.jpg'),
('Lady', 'Australian Cattle Dog/Beagle', '3yrs', '04/05/2020', 'Naps on Naps on Naps', 'FALSE', 'FALSE', 'FALSE', 'images/LadyDog.jpg');
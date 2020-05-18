
-- VOLUNTEER table

CREATE TABLE "volunteer" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (1000),
	"first_name" VARCHAR (80),
	"last_name" VARCHAR (80),
	"member_since" VARCHAR (80),
	"picture" VARCHAR (80)
);

INSERT INTO "volunteer" ("username", "password", "first_name", "last_name", "member_since", "picture")
VALUES ('mhalvorson', 'password', 'Matt', 'Halvorson', '05/18/2020', 'images/VolDogAvatar.png');



-- ADMIN table

CREATE TABLE "admin" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80),
	"password" VARCHAR (1000),
	"first_name" VARCHAR (80),
	"last_name" VARCHAR (80),
	"member_since" VARCHAR (80),
	"picture" VARCHAR (80)
);

INSERT INTO "admin" ("username", "password", "first_name", "last_name", "member_since", "picture")
VALUES ('jadmin', 'password', 'John', 'Admin', '05/01/2020', 'images/AdminDogAvatar.png');



-- TASKS table

CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (1000),
	"complete" BOOLEAN
);

INSERT INTO "tasks" ("task", "complete")
VALUES ('Clean Bathrooms', 'FALSE'),
('Mop Floors', 'FALSE'),
('Stuff Kongs', 'FALSE'),
('Wash Blankets', 'FALSE'),
('Spray Cages', 'FALSE'),
('Stock Treats', 'FALSE');



-- FEEDBACK table

CREATE TABLE "feedback" (
	"id" SERIAL PRIMARY KEY,
	"comments" TEXT,
	"issues" TEXT,
	"thank_yous" TEXT
);

INSERT INTO "feedback" ("comments", "issues", "thank_yous")
VALUES ('Ruff Weekend', 'Code on Code on Code', 'Caffeine'),
('Stressin', 'Its Monday', 'Tacos'),
('Thriving', 'None right now', 'Everybody!'),
('None today', 'nada', 'Me-Im awesome'),
('Sleepy', 'Late nights, early mornings', 'My bed'),
('I love the office', 'Pams the worst', 'Michael Scott');



-- NEWS table

CREATE TABLE "news" (
	"id" SERIAL PRIMARY KEY,
	"message" TEXT
);

INSERT INTO "news" ("message")
VALUES ('No news is good news'),
('Busy weekend, stay sharp!'),
('So many pups, so little time...'),
('Its Monday, but sonn itll be Tacos');

-- DOGS table

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
VALUES ('Ted', 'Australian Shepherd/Mix', '6yrs 7mos', '05/06/2020', 'Im awesome!', 'FALSE', 'FALSE', 'FALSE', 'images/TedDog.jpg'),
('Spark Pug', 'Pug/Mix', '2yrs', '05/01/2020', 'One Smug Pug', 'FALSE', 'FALSE', 'FALSE', 'images/SparkPugDog.jpg'),
('Shotput', 'Rottweiler/Mix', '2mos', '05/04/2020', 'Tiny but Mighty!', 'FALSE', 'FALSE', 'FALSE', 'images/ShotputDog.jpg'),
('Ken Kane', 'Shepard/Mix', '7yrs', '04/21/2020', 'Hello!', 'FALSE', 'FALSE', 'FALSE', 'images/KenKaneDog.jpg'),
('Lady', 'Australian Cattle Dog/Beagle', '3yrs', '04/05/2020', 'Naps on Naps on Naps', 'FALSE', 'FALSE', 'FALSE', 'images/LadyDog.jpg'),
('Paxton', 'Pyrenees/Australian Cattle Dog', '4yrs 3mos', '04/07/2020', 'Cuddle Expert', 'FALSE', 'FALSE', 'FALSE', 'images/PaxtonDog.jpg'),
('Jericho', 'Shepherd/Mix', '6yrs 1mo', '11/27/2019', 'Dog-gone handsome', 'FALSE', 'FALSE', 'FALSE', 'images/JerichoDog.jpg'),
('Lamont', 'Terrier/Pit Bull/Mix', '1yr 6mos', '05/10/2020', 'Friendly as can be!', 'FALSE', 'FALSE', 'FALSE', 'images/LamontDog.jpg'),
('Silicon', 'Retriever, Labrador/Mix', '5mos', '05/10/2020', 'A playful pup', 'FALSE', 'FALSE', 'FALSE', 'images/SiliconDog.jpg');
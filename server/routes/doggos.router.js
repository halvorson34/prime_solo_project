const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// DOG ROUTES

// GET route for DOGS

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "dogs";`;

  pool
    .query(queryText)
    .then((responseDb) => {
      res.send(responseDb.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// POST route for DOGS

router.post("/", (req, res) => {
  const newDoggo = req.body;
  const queryText = `INSERT INTO "dogs" ("name", "breed", "age", "arrived", "notes", "walked", "played", "favorite", "picture")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;

  const queryValues = [
    newDoggo.name,
    newDoggo.breed,
    newDoggo.age,
    newDoggo.arrived,
    newDoggo.notes,
    newDoggo.walked,
    newDoggo.played,
    newDoggo.favorite,
    newDoggo.picture,
  ];

  pool
    .query(queryText, queryValues)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// DELETE route for DOGS

router.delete("/:id", (req, res) => {
  const dogId = req.params.id;
  const queryString = `DELETE FROM "dogs" WHERE "id" = $1;`;

  pool
    .query(queryString, [dogId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

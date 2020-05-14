const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// DOGGO ROUTES

// GET route for Doggos
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "dogs" ORDER BY "name" ASC;`;

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

module.exports = router;

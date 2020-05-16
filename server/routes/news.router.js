const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET route for NEWS
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "news";`;

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

//POST route for NEWS

router.post("/", (req, res) => {
  const newMessage = req.body;
  const queryText = `INSERT INTO "news" ("message")
      VALUES ($1);`;

  const queryValues = [newMessage.message];

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

// DELETE route for NEWS

router.delete("/:id", (req, res) => {
  const newsId = req.params.id;
  const queryString = `DELETE FROM "news" WHERE "id" = $1;`;

  pool
    .query(queryString, [newsId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

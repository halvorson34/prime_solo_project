const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// FEEDBACK ROUTES

// GET route for FEEDBACK
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "feedback";`;

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

// POST route for FEEDBACK

router.post("/", (req, res) => {
  const newFeedback = req.body;
  const queryText = `INSERT INTO "feedback" ("comments", "issues", "thank_yous")
    VALUES ($1, $2, $3);`;

  const queryValues = [
    newFeedback.comments,
    newFeedback.issues,
    newFeedback.thank_yous,
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

// DELETE route for FEEDBACK

router.delete("/:id", (req, res) => {
  const feedbackId = req.params.id;
  const queryString = `DELETE FROM "feedback" WHERE "id" = $1;`;

  pool
    .query(queryString, [feedbackId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

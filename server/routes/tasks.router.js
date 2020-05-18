const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// TASKS ROUTES

// GET route for TASKS table
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "tasks";`;

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

// POST route for TASKS table

router.post("/", (req, res) => {
  const newTask = req.body;
  const queryText = `INSERT INTO "tasks" ("task", "complete")
        VALUES ($1, $2);`;

  const queryValues = [newTask.task, newTask.complete];

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

// DELETE route for TASKS

router.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  const queryString = `DELETE FROM "tasks" WHERE "id" = $1;`;

  pool
    .query(queryString, [taskId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;

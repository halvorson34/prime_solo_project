const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
// GET route for Tasks displayed on VolTasksPage
router.get("/tasks", (req, res) => {
  const queryText = `SELECT * FROM "tasks" ORDER BY "task" ASC;`;

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

// GET route for Doggos displayed on VolDoggosPage
router.get("/dogs", (req, res) => {
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

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;

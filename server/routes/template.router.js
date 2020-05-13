const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET route for Tasks
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

// GET route for Doggos
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

// GET route for Profile Info
router.get("/profile", (req, res) => {
  const queryText = `SELECT * FROM "volunteer";`;

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

// GET route for Volunteer Dashboard info
router.get("/voldashboard", (req, res) => {
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

// GET route for Admin Dashboard info
router.get("/admindashboard", (req, res) => {
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

// GET route for Admin Profile info
router.get("/adminprofile", (req, res) => {
  const queryText = `SELECT * FROM "admin";`;

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
router.post("/feedback", (req, res) => {
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

module.exports = router;

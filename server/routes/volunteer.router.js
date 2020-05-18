const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// VOLUNTEER ROUTES

// GET route for Volunteer Info
router.get("/", (req, res) => {
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

module.exports = router;

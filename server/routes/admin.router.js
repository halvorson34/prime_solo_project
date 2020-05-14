const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET route for Admin Profile info
router.get("/", (req, res) => {
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

module.exports = router;

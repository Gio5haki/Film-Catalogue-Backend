const express = require("express");
const router = express.Router();
const pool = require("../dataBase/dataBase");

const displayMovie = (req, res, next) => {
  pool
    .query('SELECT * FROM "movie";')
    .then((data) => res.send(data).json())
    .catch((error) => console.log(error));
};

router.get("/", displayMovie);


module.exports = router;

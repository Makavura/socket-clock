const express = require("express");
const router = express.Router();
const cors = require('cors');
const CORS_OPTIONS = {
    origin: 'http://localhost:3000',
}

router.get("/",cors(CORS_OPTIONS), (req, res) => {
    res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
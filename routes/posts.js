const express = require("express");
const router = express.Router();

const { getAllPosts } = require("../controllers/postsController");

// route
router.get("/", getAllPosts);

module.exports = router;
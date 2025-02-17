const express = require("express");
const { saveArticle, getSavedArticles } = require("../controllers/articleController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Protect routes using token verification middleware
router.post("/save", verifyToken, saveArticle);
router.get("/saved", verifyToken, getSavedArticles);

module.exports = router;

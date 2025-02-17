const express = require("express");
const { submitFeedback } = require("../controllers/feedbackController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Submit feedback route
router.post("/submit", verifyToken, submitFeedback);

module.exports = router;

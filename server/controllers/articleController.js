const Article = require("../models/Article");
const User = require("../models/User");

// Save article to user's saved articles list
const saveArticle = async (req, res) => {
  const { articleId } = req.body;  // articleId should be passed in the request

  try {
    const article = await Article.findById(articleId);
    if (!article) return res.status(404).json({ message: "Article not found" });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.savedArticles.push(article);
    await user.save();

    res.status(200).json({ message: "Article saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving article" });
  }
};

// Get all saved articles for a user
const getSavedArticles = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("savedArticles");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user.savedArticles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving saved articles" });
  }
};

module.exports = { saveArticle, getSavedArticles };

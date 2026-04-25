console.log("🔥 SERVER FILE LOADED");

const express = require("express");
const cors = require("cors");

// import routes
const postRoutes = require("./routes/posts");

const app = express();
const PORT = process.env.PORT || 3000;

// ======================
// MIDDLEWARE
// ======================
app.use(express.json());
app.use(cors());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ======================
// ROUTES
// ======================

// test route
app.get("/ping", (req, res) => {
  res.json({ message: "server working" });
});

// home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CommunityHub API 🚀",
    endpoints: {
      getAllPosts: "/api/posts",
      getPostById: "/api/posts/:id",
      createPost: "/api/posts",
      updatePost: "/api/posts/:id",
      deletePost: "/api/posts/:id"
    }
  });
});

// use posts routes
app.use("/api/posts", postRoutes);

// ======================
// 404 HANDLER
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ======================
// START SERVER
// ======================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
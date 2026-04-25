let posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node.js is a JavaScript runtime...",
    author: "Lucy Wachu",
    createdAt: new Date()
  }
];

const getAllPosts = (req, res) => {
  res.json(posts);
};

module.exports = {
  getAllPosts
};
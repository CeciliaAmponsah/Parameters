const getPosts = (req, res) => {
  res.status(200).send(`Get All posts filtered by "${req.query.title} "`);
};
const getPost = (req, res) => {
  res.status(200).send("Get single post");
};
const createPost = (req, res) => {
  res.status(200).send("create post");
};
const updatePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been updated`);
};
const deletePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been deleted`);
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};

const express = require("express");
const multer = require("multer");
const loginUser = require("../../controllers/loginUser");
const registerUser = require("../../controllers/registerUser");
const searchUsers = require("../../controllers/searchUsers");
const profileData = require("../../controllers/profileData");
const userInfo = require("../../controllers/userInfo");
const followUser = require("../../controllers/followUser");
const createPost = require("../../controllers/createPost");
const getPosts = require("../../controllers/getPosts");
const likePost = require("../../controllers/likePost");
const addComment = require("../../controllers/addComment");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.send("Hello from auth route");
});

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/profile", profileData);
router.post("/search", searchUsers);
router.post("/info", userInfo);
router.post("/follow", followUser);
router.post("/post", upload.single("image"), createPost);
router.post("/posts", getPosts);
router.post("/like", likePost);
router.post("/comment", addComment);

module.exports = router;

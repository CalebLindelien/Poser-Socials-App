import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// Grab the user feed when we are on the home page
router.get("/", verifyToken, getFeedPosts);
// Grab the specific users posts
router.get("/:userId/posts", verifyToken, getUserPosts);


/* UPDATE */
// Like a post or unliking
router.patch("/:id/like", verifyToken, likePost);

export default router;
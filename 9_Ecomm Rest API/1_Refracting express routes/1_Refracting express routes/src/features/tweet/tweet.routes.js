import express from 'express'
import { getTweets,createTweet } from './tweet.controller.js'

//2.Initializing Express Router
const router = express.Router();

router.get("/", getTweets);

router.post("/", createTweet);

export default router;
import express from "express";
import {
  getTweets,
  createTweet,
} from "./src/features/tweet/tweet.controller.js";
import TweetRouter from "./src/features/tweet/tweet.routes.js"
const app = express();

app.use("/api/tweets",TweetRouter)
// TODO: Refactor these route handlers into a separate routes file using express Router




app.listen(5000, () => {
  console.log("server is listening at port 5000");
});

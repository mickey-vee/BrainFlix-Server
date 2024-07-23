import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const videoData = fs.readFileSync("./data/video.json");
  res.json(JSON.parse(videoData));
});

router.get("/:id", (req, res) => {
  const videoData = fs.readFileSync("./data/videoData.json");
  res.json(JSON.parse(videoData));
});

export default router;

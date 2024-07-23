import express from "express";
import fs from "fs";

const router = express.Router();

//get video data
router.get("/", (req, res) => {
  const videoData = fs.readFileSync("./data/video.json");
  res.json(JSON.parse(videoData));
});

//get all video/details data
router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const parsedData = JSON.parse(fs.readFileSync("./data/videoData.json"));
    const video = parsedData.find((video) => video.id === id);
    res.json(video);
  } catch (error) {
    console.error(error);
  }
});

export default router;

import express from "express";
import fs from "fs";
import { randomUUID } from "crypto";

const router = express.Router();
const filePath = "./data/videoData.json";

const getVideoData = (filePath) => {
  const videoData = fs.readFileSync(filePath);
  const parsedVideoData = JSON.parse(videoData);
  return parsedVideoData;
};

// Write data to the file
const writeData = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

const pushData = (filePath, newData) => {
  const data = getVideoData(filePath);
  data.push(newData);
  writeData(filePath, data);
};

// Get all video data
router.get("/", (req, res) => {
  const videos = getVideoData(filePath);
  res.status(200).json(videos);
});

// Get video details by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const fetchVideoData = getVideoData(filePath);
  const videoDetails = fetchVideoData.find((video) => video.id === id);

  if (videoDetails) {
    console.log(videoDetails.id);
    return res.status(200).json(videoDetails);
  }

  res.status(404).send("Video ID doesn't exist");
});

// Get timestamp
const today = new Date();
const timestamp = today.getTime();

// Post a new video
router.post("/", (req, res) => {
  console.log("Request body:", req.body);
  const { title, description, image } = req.body;
  const newVideo = {
    id: randomUUID(),
    title: title,
    channel: "Guest",
    image: image,
    description: description,
    views: "1000000",
    likes: "1000000",
    duration: "12:26",
    video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
    timestamp: timestamp,
    comments: [
      {
        id: randomUUID(),
        name: "Michelle",
        comment: "Wow! This looks amazing",
        likes: "10000000",
        timestamp: timestamp,
      },
    ],
  };

  pushData(filePath, newVideo);

  res.json(newVideo);
});

export default router;

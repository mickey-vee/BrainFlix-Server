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

// Post a new video
router.post("/", (req, res) => {
  console.log("Request body:", req.body);
  const { title, description } = req.body;
  const newVideo = {
    id: randomUUID(),
    title: title,
    channel: "Guest",
    image: "http://localhost:8080/images/image0.jpg",
    description: description,
    likes: "",
    duration: "12:26",
    video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
    timestamp: "",
    comments: [
      {
        id: "",
        Name: "",
        comment: "",
        likes: "",
        timestamp: "",
      },
    ],
  };

  pushData(filePath, newVideo);

  res.json(newVideo);
});

export default router;

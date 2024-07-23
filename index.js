import express from "express";
import cors from "cors";
import videoRouter from "./routes/video.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use("/videos", videoRouter);

app.listen(port);

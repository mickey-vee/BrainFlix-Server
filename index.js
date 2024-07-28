import express from "express";
import cors from "cors";
import videoRoute from "./routes/VideoRoute.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.use("/video", videoRoute);

app.listen(PORT);

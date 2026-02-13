import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import fetch from "node-fetch";

const API_URL = "https://ulvis.net/api.php?url=";

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

router.get("/shorten", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url)
      return res.status(400).json({ error: "URL parameter is required" });

    const response = await fetch(API_URL + encodeURIComponent(url));
    const data = await response.text();

    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.use("/", router);

export const handler = serverless(app);

import express from "express";
import cors from "cors";
import serverless from "serverless-http";

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

    console.log("Request received at:", req.path);

    const response = await fetch(API_URL + encodeURIComponent(url), {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    });
    const data = await response.text();

    console.log(data);

    res.json({ result: data });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.use("/", router);

export const handler = serverless(app);

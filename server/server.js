import express from "express";
import cors from "cors";

const API_URL = "https://ulvis.net/api.php?url=";
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.get("/shorten", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL parameter is required" });
    }

    const response = await fetch(API_URL + encodeURIComponent(url));

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to shorten URL",
      });
    }

    const data = await response.text();
    console.log("Response body:", data);

    res.json({ result: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

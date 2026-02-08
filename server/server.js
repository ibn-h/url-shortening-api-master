import express from "express";
import cors from "cors";

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

    // Use built-in fetch (Node.js 18+)
    const response = await fetch(
      `https://ulvis.net/api.php?url=${encodeURIComponent(url)}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to shorten URL",
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/highlights", async (req, res) => {
    try {
        const response = await axios.get("https://www.scorebat.com/video-api/v1/");

        const cleaned = response.data.map(match => ({
            title: match.title,
            competition: match.competition,
            date: match.date,
            thumbnail: match.thumbnail,
            video: match.videos[0].embed
        }));

        res.json(cleaned);
    } catch (error) {
        console.error("Error fetching highlights:", error.message);
        res.status(500).json({ error: "Failed to fetch highlights" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});
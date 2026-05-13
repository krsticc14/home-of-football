const BASE_URL = "https://www.scorebat.com/video-api/v1/";

export const getHighlights = async () => {
    const response = await fetch(BASE_URL);
    const data = await repsonse.json();

    return data.map(match => ({
        title: match.title,
        competition: match.competition,
        date: match.date,
        thumbnail: match.thumbnail,
        video: match.videos?.[0]?.embed
    }));
};
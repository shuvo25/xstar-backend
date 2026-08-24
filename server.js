const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const videos = [
  {
    id: "1",
    title: "Swami Pardesh Suraj Tratak Uday Singh Rawat SIRAZEE Manju Nautiyal Latest Pahadi Song",
    category: "Trending",
    country: "Bangladesh",
    flagUrl: "https://flagcdn.com/w40/bd.png",
    videoUrl: "https://archive.org/download/swami-pardesh-suraj-tratak-uday-singh-rawat-sirazee-manju-nautiyal-latest-pahadi-song-1080p/Swami_Pardesh-_Suraj_Tratak___Uday_Singh_Rawat___SIRAZEE___Manju_Nautiyal___Latest_Pahadi_Song%281080p%29.mp4",
    thumbnail: "https://archive.org/download/swami-pardesh-suraj-tratak-uday-singh-rawat-sirazee-manju-nautiyal-latest-pahadi-song-1080p/__ia_thumb.jpg",
    views: "1.2M",
    duration: "24:18",
    channelName: "Pahadi Music",
    channelAvatar: "https://i.pravatar.cc/150?img=33"
  }
];

app.get('/', (req, res) => {
  res.send('xstar Video API Server is Running');
});

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

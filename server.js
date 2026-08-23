const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const videos = [
  {
    id: "1",
    title: "Cyberpunk 2099 - Cinematic 4K Experience",
    category: "Trending",
    country: "Bangladesh",
    flagUrl: "https://flagcdn.com/w40/bd.png",
    videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    views: "3.8M",
    duration: "24:18",
    channelName: "AeroVision Cinema",
    channelAvatar: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: "2",
    title: "4K Nature Relaxation Film",
    category: "Recommend",
    country: "United States",
    flagUrl: "https://flagcdn.com/w40/us.png",
    videoUrl: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    views: "1.2M",
    duration: "15:40",
    channelName: "Nature Scope",
    channelAvatar: "https://i.pravatar.cc/150?img=12"
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


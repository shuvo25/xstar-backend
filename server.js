const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ভিডিও ডেটাবেস লিস্ট
const videoList = [
  {
    id: "catbox_01",
    title: "New Video Stream 1",
    category: "Bangladeshi",
    videoUrl: "https://files.catbox.moe/e7ve5y.mp4",
    thumbnailUrl: "https://files.catbox.moe/e7ve5y.mp4",
    creator: "Xstar Creator",
    views: "10K",
    duration: "03:45"
  },
  {
    id: "catbox_02",
    title: "New Video Stream 2",
    category: "American",
    videoUrl: "https://files.catbox.moe/rx6xzd.mp4",
    thumbnailUrl: "https://files.catbox.moe/rx6xzd.mp4",
    creator: "Xstar Creator",
    views: "15K",
    duration: "04:20"
  },
  {
    id: "catbox_03",
    title: "New Video Stream 3",
    category: "Indian",
    videoUrl: "https://files.catbox.moe/wab66x.mp4",
    thumbnailUrl: "https://files.catbox.moe/wab66x.mp4",
    creator: "Xstar Creator",
    views: "25K",
    duration: "05:10"
  }
];

// API Endpoints
app.get('/', (req, res) => {
  res.send('Xstar Video Backend Server is Running');
});

app.get('/api/videos', (req, res) => {
  res.json(videoList);
});

// Port listening for local and deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
        

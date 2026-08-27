const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const videos = [
  // American
  { id: "1", title: "American Song 1", videoUrl: "https://files.catbox.moe/mm24bj.mp4", category: "American", thumbnailUrl: "https://files.catbox.moe/mm24bj.mp4" },
  { id: "2", title: "American Song 2", videoUrl: "https://files.catbox.moe/vul1vg.mp4", category: "American", thumbnailUrl: "https://files.catbox.moe/vul1vg.mp4" },
  { id: "3", title: "American Song 3", videoUrl: "https://files.catbox.moe/gpe5cm.mp4", category: "American", thumbnailUrl: "https://files.catbox.moe/gpe5cm.mp4" },

  // Indian
  { id: "4", title: "Indian Song 1", videoUrl: "https://files.catbox.moe/oiyqu9.mp4", category: "Indian", thumbnailUrl: "https://files.catbox.moe/oiyqu9.mp4" },
  { id: "5", title: "Indian Song 2", videoUrl: "https://files.catbox.moe/4cpayf.mp4", category: "Indian", thumbnailUrl: "https://files.catbox.moe/4cpayf.mp4" },
  { id: "6", title: "Indian Song 3", videoUrl: "https://files.catbox.moe/to7xtz.mp4", category: "Indian", thumbnailUrl: "https://files.catbox.moe/to7xtz.mp4" },

  // Bangladeshi
  { id: "7", title: "Bangladeshi Song 1", videoUrl: "https://files.catbox.moe/caomd9.mp4", category: "Bangladeshi", thumbnailUrl: "https://files.catbox.moe/caomd9.mp4" },
  { id: "8", title: "Bangladeshi Song 2", videoUrl: "https://files.catbox.moe/b7krm8.mp4", category: "Bangladeshi", thumbnailUrl: "https://files.catbox.moe/b7krm8.mp4" },
  { id: "9", title: "Bangladeshi Song 3", videoUrl: "https://files.catbox.moe/rx6xzd.mp4", category: "Bangladeshi", thumbnailUrl: "https://files.catbox.moe/rx6xzd.mp4" },

  // Pakistani
  { id: "10", title: "Pakistani Song 1", videoUrl: "https://files.catbox.moe/hgoyyq.mp4", category: "Pakistani", thumbnailUrl: "https://files.catbox.moe/hgoyyq.mp4" },
  { id: "11", title: "Pakistani Song 2", videoUrl: "https://files.catbox.moe/x3li5h.mp4", category: "Pakistani", thumbnailUrl: "https://files.catbox.moe/x3li5h.mp4" },
  { id: "12", title: "Pakistani Song 3", videoUrl: "https://files.catbox.moe/1ehf2b.mp4", category: "Pakistani", thumbnailUrl: "https://files.catbox.moe/1ehf2b.mp4" },

  // Japanese
  { id: "13", title: "Japanese Song 1", videoUrl: "https://files.catbox.moe/snsbjg.mp4", category: "Japanese", thumbnailUrl: "https://files.catbox.moe/snsbjg.mp4" },
  { id: "14", title: "Japanese Song 2", videoUrl: "https://files.catbox.moe/h9pjhn.mp4", category: "Japanese", thumbnailUrl: "https://files.catbox.moe/h9pjhn.mp4" },
  { id: "15", title: "Japanese Song 3", videoUrl: "https://files.catbox.moe/lp40um.mp4", category: "Japanese", thumbnailUrl: "https://files.catbox.moe/lp40um.mp4" },

  // Russian
  { id: "16", title: "Russian Song 1", videoUrl: "https://files.catbox.moe/k96wkx.mp4", category: "Russian", thumbnailUrl: "https://files.catbox.moe/k96wkx.mp4" },
  { id: "17", title: "Russian Song 2", videoUrl: "https://files.catbox.moe/foca2q.mp4", category: "Russian", thumbnailUrl: "https://files.catbox.moe/foca2q.mp4" },
  { id: "18", title: "Russian Song 3", videoUrl: "https://files.catbox.moe/n7n07m.mp4", category: "Russian", thumbnailUrl: "https://files.catbox.moe/n7n07m.mp4" },

  // Spanish
  { id: "19", title: "Spanish Song 1", videoUrl: "https://files.catbox.moe/2wmzff.mp4", category: "Spanish", thumbnailUrl: "https://files.catbox.moe/2wmzff.mp4" },
  { id: "20", title: "Spanish Song 2", videoUrl: "https://files.catbox.moe/lul0nf.mp4", category: "Spanish", thumbnailUrl: "https://files.catbox.moe/lul0nf.mp4" },
  { id: "21", title: "Spanish Song 3", videoUrl: "https://files.catbox.moe/zqcwuc.mp4", category: "Spanish", thumbnailUrl: "https://files.catbox.moe/zqcwuc.mp4" },

  // Colombian
  { id: "22", title: "Colombian Song 1", videoUrl: "https://files.catbox.moe/r0s261.mp4", category: "Colombian", thumbnailUrl: "https://files.catbox.moe/r0s261.mp4" },
  { id: "23", title: "Colombian Song 2", videoUrl: "https://files.catbox.moe/2h2yl6.mp4", category: "Colombian", thumbnailUrl: "https://files.catbox.moe/2h2yl6.mp4" },
  { id: "24", title: "Colombian Song 3", videoUrl: "https://files.catbox.moe/o6zx5t.mp4", category: "Colombian", thumbnailUrl: "https://files.catbox.moe/o6zx5t.mp4" },

  // Brazilian
  { id: "25", title: "Brazilian Song 1", videoUrl: "https://files.catbox.moe/nx3ycw.mp4", category: "Brazilian", thumbnailUrl: "https://files.catbox.moe/nx3ycw.mp4" },
  { id: "26", title: "Brazilian Song 2", videoUrl: "https://files.catbox.moe/hvqa4m.mp4", category: "Brazilian", thumbnailUrl: "https://files.catbox.moe/hvqa4m.mp4" },
  { id: "27", title: "Brazilian Song 3", videoUrl: "https://files.catbox.moe/zb2yey.mp4", category: "Brazilian", thumbnailUrl: "https://files.catbox.moe/zb2yey.mp4" },

  // Korean
  { id: "28", title: "Korean Song 1", videoUrl: "https://files.catbox.moe/3jhe2h.mp4", category: "Korean", thumbnailUrl: "https://files.catbox.moe/3jhe2h.mp4" },
  { id: "29", title: "Korean Song 2", videoUrl: "https://files.catbox.moe/h85te8.mp4", category: "Korean", thumbnailUrl: "https://files.catbox.moe/h85te8.mp4" },
  { id: "30", title: "Korean Song 3", videoUrl: "https://files.catbox.moe/1632ct.mp4", category: "Korean", thumbnailUrl: "https://files.catbox.moe/1632ct.mp4" },

  // Argentinean
  { id: "31", title: "Argentinean Song 1", videoUrl: "https://files.catbox.moe/zlyfza.mp4", category: "Argentinean", thumbnailUrl: "https://files.catbox.moe/zlyfza.mp4" },
  { id: "32", title: "Argentinean Song 2", videoUrl: "https://files.catbox.moe/dxk1pg.mp4", category: "Argentinean", thumbnailUrl: "https://files.catbox.moe/dxk1pg.mp4" },
  { id: "33", title: "Argentinean Song 3", videoUrl: "https://files.catbox.moe/jpmdtj.mp4", category: "Argentinean", thumbnailUrl: "https://files.catbox.moe/jpmdtj.mp4" },

  // Chinese
  { id: "34", title: "Chinese Song 1", videoUrl: "https://files.catbox.moe/vcp8kz.mp4", category: "Chinese", thumbnailUrl: "https://files.catbox.moe/vcp8kz.mp4" },
  { id: "35", title: "Chinese Song 2", videoUrl: "https://files.catbox.moe/9wjsnj.mp4", category: "Chinese", thumbnailUrl: "https://files.catbox.moe/9wjsnj.mp4" },
  { id: "36", title: "Chinese Song 3", videoUrl: "https://files.catbox.moe/9hfvng.mp4", category: "Chinese", thumbnailUrl: "https://files.catbox.moe/9hfvng.mp4" },

  // Mexican
  { id: "37", title: "Mexican Song 1", videoUrl: "https://files.catbox.moe/rlafxc.mp4", category: "Mexican", thumbnailUrl: "https://files.catbox.moe/rlafxc.mp4" },
  { id: "38", title: "Mexican Song 2", videoUrl: "https://files.catbox.moe/40pmqe.mp4", category: "Mexican", thumbnailUrl: "https://files.catbox.moe/40pmqe.mp4" },
  { id: "39", title: "Mexican Song 3", videoUrl: "https://files.catbox.moe/a5h1ai.mp4", category: "Mexican", thumbnailUrl: "https://files.catbox.moe/a5h1ai.mp4" },

  // British
  { id: "40", title: "British Song 1", videoUrl: "https://files.catbox.moe/ese01z.mp4", category: "British", thumbnailUrl: "https://files.catbox.moe/ese01z.mp4" },
  { id: "41", title: "British Song 2", videoUrl: "https://files.catbox.moe/mluxou.mp4", category: "British", thumbnailUrl: "https://files.catbox.moe/mluxou.mp4" },
  { id: "42", title: "British Song 3", videoUrl: "https://files.catbox.moe/gdrz1u.mp4", category: "British", thumbnailUrl: "https://files.catbox.moe/gdrz1u.mp4" },

  // Venezuelan
  { id: "43", title: "Venezuelan Song 1", videoUrl: "https://files.catbox.moe/qk3al1.mp4", category: "Venezuelan", thumbnailUrl: "https://files.catbox.moe/qk3al1.mp4" },
  { id: "44", title: "Venezuelan Song 2", videoUrl: "https://files.catbox.moe/knhuub.mp4", category: "Venezuelan", thumbnailUrl: "https://files.catbox.moe/knhuub.mp4" },

  // Indonesian
  { id: "45", title: "Indonesian Song 1", videoUrl: "https://files.catbox.moe/867pvc.mp4", category: "Indonesian", thumbnailUrl: "https://files.catbox.moe/867pvc.mp4" },
  { id: "46", title: "Indonesian Song 2", videoUrl: "https://files.catbox.moe/mouth8.mp4", category: "Indonesian", thumbnailUrl: "https://files.catbox.moe/mouth8.mp4" },
  { id: "47", title: "Indonesian Song 3", videoUrl: "https://files.catbox.moe/miow01.mp4", category: "Indonesian", thumbnailUrl: "https://files.catbox.moe/miow01.mp4" },

  // German
  { id: "48", title: "German Song 1", videoUrl: "https://files.catbox.moe/tpfsc0.mp4", category: "German", thumbnailUrl: "https://files.catbox.moe/tpfsc0.mp4" },
  { id: "49", title: "German Song 2", videoUrl: "https://files.catbox.moe/pkqsqj.mp4", category: "German", thumbnailUrl: "https://files.catbox.moe/pkqsqj.mp4" },
  { id: "50", title: "German Song 3", videoUrl: "https://files.catbox.moe/ivn58i.mp4", category: "German", thumbnailUrl: "https://files.catbox.moe/ivn58i.mp4" },

  // Kazakh
  { id: "51", title: "Kazakh Song 1", videoUrl: "https://files.catbox.moe/18g5ni.mp4", category: "Kazakh", thumbnailUrl: "https://files.catbox.moe/18g5ni.mp4" },
  { id: "52", title: "Kazakh Song 2", videoUrl: "https://files.catbox.moe/l7aoo5.mp4", category: "Kazakh", thumbnailUrl: "https://files.catbox.moe/l7aoo5.mp4" },
  { id: "53", title: "Kazakh Song 3", videoUrl: "https://files.catbox.moe/3vh11q.mp4", category: "Kazakh", thumbnailUrl: "https://files.catbox.moe/3vh11q.mp4" },

  // French
  { id: "54", title: "French Song 1", videoUrl: "https://files.catbox.moe/4mh5a1.mp4", category: "French", thumbnailUrl: "https://files.catbox.moe/4mh5a1.mp4" },
  { id: "55", title: "French Song 2", videoUrl: "https://files.catbox.moe/23e5lh.mp4", category: "French", thumbnailUrl: "https://files.catbox.moe/23e5lh.mp4" },
  { id: "56", title: "French Song 3", videoUrl: "https://files.catbox.moe/1bz5wb.mp4", category: "French", thumbnailUrl: "https://files.catbox.moe/1bz5wb.mp4" }
];

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   

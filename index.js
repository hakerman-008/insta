const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Choose a port number

app.use(express.json());

app.get('/insta', async (req, res) => {
  try {
    const userUrl = req.query.url;

    
    const options = {
      method: 'GET',
      url: 'https://instagram-post-and-reels-downloader.p.rapidapi.com/insta/',
      params: { url: userUrl },
      headers: {
        'X-RapidAPI-Key': 'b38444b5b7mshc6ce6bcd5c9e446p154fa1jsn7bbcfb025b3b',
        'X-RapidAPI-Host': 'instagram-post-and-reels-downloader.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const url = response.data.detail.data.items[0].urls[0].urlDownloadable;

  
    res.json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Instagram reel URL' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

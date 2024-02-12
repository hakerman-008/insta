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
      url: 'https://tools.betabotz.eu.org/tools/instagramdl',
      params: { url: userUrl }
    };

    const response = await axios.request(options);
    const result = response.data.result[0];
    const url = result._url;

    res.json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Instagram reel URL' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

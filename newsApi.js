const axios = require('axios');
const { newsKey } = require('newsKey');

axios
  .get(
    `https://api.marketaux.com/v1/news/all?symbols=AAPL,TSLA&filter_entities=true&api_token=${newsKey}`
  )
  .then((res) => {
    console.log(res.data);
  });

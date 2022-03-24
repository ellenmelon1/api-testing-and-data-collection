const axios = require('axios');
const { googleKey } = require('./secret-info');
// const KGSearch = require('google-kgsearch');
// const kGraph = KGSearch(process.env.KGSEARCH_API_KEY);

// let params = {
//   query: 'Taylor Swift',
//   types: 'Person',
//   limit: 1,
//   api_key: 'AIzaSyBa5rL6woKrOxqIttRyhxcLGkA2J8_OTyQ',
// };

// kGraph.search(params, (err, items) => {
//   if (err) console.error(err);
//   console.log(items);
// });

const ticker = 'MSFT';

axios
  .get(
    `https://kgsearch.googleapis.com/v1/entities:search?limit=1&indent=True&query=The%20$%${ticker}%20Company&key=${googleKey}`
  )
  .then((res) => {
    console.log(res.data.itemListElement);
  });

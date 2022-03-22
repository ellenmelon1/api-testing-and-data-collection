const axios = require('axios');
const { polygonKey } = require('./secret-info');
const { appendFile } = require('fs/promises');

// data collected for 1st of the month where not a weekend or holiday - otherwise next closest working day in the future used. Stored in 2 JSON files b/c limit.

let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = date.getFullYear();

date = yyyy + '-' + mm + '-' + dd;

axios
  .get(
    `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}?adjusted=true&apiKey=${polygonKey}`
  )
  .then(({ data: { results } }) => {
    const topCompanies = [
      'MSFT',
      'LIN',
      'ACN',
      'JBHT',
      'XYL',
      'TXN',
      'CRM',
      'GIL',
      'MCB',
      'INFO',
      'STM',
      'NVDA',
      'ROG',
      'ORCL',
      'MSI',
      'QCOM',
      'SHW',
      'TEL',
      'HPE',
      'EXPO',
      'ADBE',
      'MATX',
      'STLA',
      'CCK',
      'DE',
      'ASML',
      'WFG',
      'CBT',
      'MC',
      'ASIX',
      'AMD',
      'NKE',
      'APAM',
      'BLL',
      'ETN',
      'TW',
      'AMAT',
      'FN',
      'VSTO',
      'QGEN',
      'ASGN',
      'DOV',
      'TMO',
      'AFG',
      'CNHI',
      'JBL',
      'LRCX',
      'LLY',
      'ON',
      'ALTR',
      'AAPL',
      'MT',
      'FTNT',
      'GOOGL',
      'SPG',
      'STLD',
      'OC',
      'BCO',
      'NTAP',
      'TX',
      'IT',
      'TXT',
      'AVY',
      'FIVE',
      'CC',
      'MAT',
      'KIM',
      'WDAY',
      'YUM',
      'ABG',
      'NOG',
      'ARE',
      'CR',
      'MHK',
      'COST',
      'ABT',
      'ANET',
      'FR',
      'A',
      'WM',
      'DHR',
      'DAR',
      'KEYS',
      'GS',
      'FB',
      'WCC',
      'XLNX',
      'CDNS',
      'SMTC',
      'EBAY',
      'AMT',
      'SUI',
      'CSR',
      'HOLX',
      'FLEX',
      'TSCO',
      'CMG',
      'ZTS',
      'THRM',
      'AMP',
    ];
    const polygonData = [];

    const matches = results.filter((result) => {
      if (topCompanies.includes(result.T)) {
        const company = {};
        (company.ticker = result.T),
          (company.averagePrice = result.vw),
          (company.date = date);
        polygonData.push(company);
      }
    });
    console.log(polygonData);
    // return appendFile('./polygonData2.json', JSON.stringify(polygonData));
  })
  .catch((err) => console.log(err));

//WFG

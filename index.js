const express = require('express');
const app = express();

const URL = 'https://search.rakuten.co.jp/search/mall/keyboard';

const data = [];

const axios = require('axios');

const cheerio = require('cheerio');

const PORT = 3000;

app.listen(PORT, () => {console.log('server running...')});

axios(URL).then((response) => {
  const htmlParser = response.data;
  // console.log(htmlParser);
  const $ = cheerio.load(htmlParser);
  $('.searchresultitem', htmlParser).each(function () {
    const title = $(this).find('.title').text();
    const price = $(this).find('.important').text();
    data.push({
      title,
      price
    });
  });
}).then((res) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
});




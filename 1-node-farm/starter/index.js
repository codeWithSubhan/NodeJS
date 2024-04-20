const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

///////////////////////////////// SERVER /////////////////////////////////
// it will read only once top level code

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

// read one time when app loaded first time not always read when server callback fn fire off
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slug = dataObj.map((el) => slugify(el.productName), { lower: true });

// callback fn will fire off each time when any user hit url to this server
// ROUTING
const server = http.createServer((req, res) => {
  // it make object of quries
  const { query, pathname } = url.parse(req.url, true);

  //Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');

    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    //product pag
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const output = replaceTemplate(
      tempProduct,
      dataObj[slug.includes(query.id) & query.id]
    );
    res.end(output);

    //api
  } else if (pathname === '/api') {
    // first get that file and send as response
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    //404 ERROR
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html', //header respnonse
      'subhan-header': 'learning nodejs',
    });
    res.end('<h1>Page not found!</h1>'); //response
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to reqests on port 8000');
});

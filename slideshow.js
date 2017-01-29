const express = require("express");
const fs = require('fs');
const path = require('path');
const http = require('http');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  fs.stat('index.html', (err, stats) => {
    if (err)
    {
      res.writeHead(404);
      return;
    }

    res.writeHead(200,
    {
      'Content-Type': 'text/html',
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    var filestream = fs.createReadStream('index.html');
    filestream.pipe(res);
    filestream.on('finish', (err, data) => {
      file.close();
    });
    filestream.on('error', err => {
      console.log(err);
    });
  });
});

app.get('/doc/*.html', (req, res) => {
  var doc_filepath = path.join(__dirname, req.url);
  console.log(doc_filepath);

  fs.stat(doc_filepath, (err, stats) => {
    if (err)
    {
      res.writeHead(404);
      return;
    }

    res.writeHead(200,
    {
      'Content-Type': 'text/plain',
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    var filestream = fs.createReadStream(doc_filepath);
    filestream.pipe(res);
    filestream.on('finish', (err, data) => {
      file.close();
    });
    filestream.on('error', err => {
      console.log(err);
    });
  });
});

app.get('/css/*', (req, res) => {
  var doc_filepath = path.join(__dirname, req.url);
  console.log(doc_filepath);

  fs.stat(doc_filepath, (err, stats) => {
    if (err)
    {
      res.writeHead(404);
      return;
    }

    res.writeHead(200,
    {
      'Content-Type': 'text/css',
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    var filestream = fs.createReadStream(doc_filepath);
    filestream.pipe(res);
    filestream.on('finish', (err, data) => {
      file.close();
    });
    filestream.on('error', err => {
      console.log(err);
    });
  });
});

app.get('/js/*', (req, res) => {
  var doc_filepath = path.join(__dirname, req.url);
  console.log(doc_filepath);

  fs.stat(doc_filepath, (err, stats) => {
    if (err)
    {
      res.writeHead(404);
      return;
    }

    res.writeHead(200,
    {
      'Content-Type': 'application/x-javascript',
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    var filestream = fs.createReadStream(doc_filepath);
    filestream.pipe(res);
    filestream.on('finish', (err, data) => {
      file.close();
    });
    filestream.on('error', err => {
      console.log(err);
    });
  });
});

var server = http.createServer(app);
server.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('http://%s:%s', host, port);
});

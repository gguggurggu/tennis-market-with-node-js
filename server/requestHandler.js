//화면 불러오기 (file sync)
const fs = require("fs");
const mainView = fs.readFileSync("../main.html", "utf-8");
const mainCSS = fs.readFileSync("../main.css", "utf-8");

//mariadb 불러오기
const mariadb = require("../database/connect/mariadb.js");

function main(response) {
  console.log("main");

  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(mainView);
  response.write("<style>" + mainCSS + "</style>");
  response.end();
}

function favicon() {
  console.log("favicon");
}

function redRacket(response) {
  fs.readFile("../img/redRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function blueRacket(response) {
  fs.readFile("../img/blueRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function blackRacket(response) {
  fs.readFile("../img/blackRacket.png", function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function order(response, productId) {
  response.writeHead(200, { "Content-Type": "text/html" });

  mariadb.query(
    "INSERT INTO orderlist VALUES (" +
      productId +
      ", '" +
      new Date().toLocaleDateString() +
      "');",
    function (err, rows) {
      console.log(rows);
    }
  );

  response.write("order page");
  response.end();
}

// key:value
let handle = {};
handle["/"] = main;
handle["/order"] = order;
handle["/favicon.ico"] = function () {};

/* image directory */
handle["/img/redRacket.png"] = redRacket;
handle["/img/blueRacket.png"] = blueRacket;
handle["/img/blackRacket.png"] = blackRacket;

exports.handle = handle;

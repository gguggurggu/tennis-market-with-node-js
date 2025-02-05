const mariadb = require("mysql");

const conn = mariadb.createConnection({
  //mariadb에 접속하는 방법
  hosts: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  //방 선택
  database: "Tennis",
});

//연결통로 밖에서 이용가능
module.exports = conn;

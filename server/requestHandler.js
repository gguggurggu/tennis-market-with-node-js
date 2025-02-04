function main(response) {
  console.log("main");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("YUJIN KANG");
  response.end();
}

function login(response) {
  console.log("login");

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Login page");
  response.end();
}

function favicon() {
  console.log("favicon");
}

// key:value
let handle = {};
handle["/"] = main;
handle["/login"] = login;
handle["/favicon.ico"] = favicon;

exports.handle = handle;

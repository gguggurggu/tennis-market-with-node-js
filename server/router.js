function route(pathname, handle, response, productId) {
  console.log("pathname : " + pathname);

  if (typeof handle[pathname] === "function") {
    handle[pathname](response, productId);
  } else {
    //url이 없어도 서버가 안 죽음
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found.");
    response.end();
  }
}

exports.route = route;

const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 10);
});

const app = express();
const port = 3000;

app.use(connectLivereload());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(
    `Server listening at http://localhost:${port}`
  );
});

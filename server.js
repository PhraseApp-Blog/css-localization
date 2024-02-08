const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});

const app = express();
const port = 3000;

app.use(connectLivereload());
app.use(express.static("public"));
app.use(expressEjsLayouts);

app.set("view engine", "ejs");
app.set("layout", "layout/default");

const pages = [
  {
    route: "/",
    title: "Essentials",
    page: "essentials",
  },
  {
    route: "/layout",
    title: "Layout",
    page: "layout",
  },
  {
    route: "/typography",
    title: "Typography",
    page: "typography",
  },
];

pages.forEach((page) => {
  app.get(page.route, (_, res) => {
    res.render(`pages/${page.page}`, { title: page.title });
  });
});

app.listen(port, () => {
  console.log(
    `Server listening at http://localhost:${port}`
  );
});

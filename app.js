const PORT = process.env.PORT;
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const logger = require("./lib/log/logger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const app = express();

// Express setting
app.set("view engine","ejs");
//サーバサイド情報の隠ぺい
app.disable("x-powered-by");
// Static resource routing
app.use(favicon(path.join(__dirname,"/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamic resource routing
app.use("/",require("./routes/index.js"));

// Set application log.
app.use(applicationlogger());

// Excute web application
app.listen(PORT,()=>{
  logger.application.info(`Application listening at ${PORT}`);
});


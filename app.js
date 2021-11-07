//memo
//分割代入:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//
const PORT = process.env.PORT;
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const logger = require("./lib/log/logger.js");
const applicationlogger = require("./lib/log/applicationlogger.js");
const acceslogger = require("./lib/log/accesslogger.js");
const app = express();

// Express setting
app.set("view engine","ejs");
//サーバサイド情報の隠ぺい
app.disable("x-powered-by");
// Static resource routing
app.use(favicon(path.join(__dirname,"/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname, "/public")));

// Set Access LOG(JSは上から順に実行されるため、アクセスログをいれる箇所に注意。
//このサンプルでは、動的コンテンツのみのログを取得。)
app.use(acceslogger());

// Dynamic resource routing
app.use("/",require("./routes/index.js"));
app.use("/test", async(req,res,next) => {
  const { MySQLClient , sql } = require("./lib/database/client.js");
  var data;

  try{
    data = await MySQLClient.executeQuery(await sql("SELECT_SHOP_BASIC_BY_ID"),  [1]  );
    console.log(data);
  }catch(err){
    next(err);
  }finally{
    await MySQLClient.end();
  }

  res.end("OK");

});

// Set application log.
app.use(applicationlogger());

// Excute web application
app.listen(PORT,()=>{
  logger.application.info(`Application listening at ${PORT}`);
});


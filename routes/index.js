const router = require("express").Router();

router.get("/",(req,res)=>{
  //viewsフォルダからの相対パスでejsを指定
  res.render("./index.ejs");
});

module.exports = router;
const router = require("express").Router();

router.get("/",(req,res)=>{
  //viewsフォルダからの相対パスでejsを指定
  // res.render(path, data(オブジェクト))
  // 関数/値を渡す res.locals.method = () => {}
  res.render("./index.ejs");
});

module.exports = router;
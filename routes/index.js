var express = require('express');
var router = express.Router();
// 引入数据库模块
var blogSchema = require('../models/dbs/contents');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
// post 请求
router.post('/',function(req,res,next){
  // 接收和处理post请求
  var blogStatus = new blogSchema({
    title: req.body.title,
    author:req.body.author,
    content:req.body.content,
    date: new Date()
  });
  blogSchema.collection.insert(blogStatus,function(err,result){
    if(err){
      console.log("insert error: "+ err);
    }else{
      console.log("insert success: "+result);
      res.send(result);
      //res.location('/allblogs');
    }
  });
});

module.exports = router;

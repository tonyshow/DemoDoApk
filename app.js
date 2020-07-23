 require("shelljs/global")
 var async = require('async');
 var app = module.exports = {};
 var DogDoApks = require("./apkConfigs/DogDoApks");

 //  app.fun1 = function(cb)
 //  {
 //      console.log("fun1")
 //      cb("errcode:1", 1, 2)
 //  }
 //  app.fun2 = function(data, daw, cb)
 //  {
 //      console.log("fun2")
 //      cb(null, 2)
 //  }

 app.doMain = function()
 {
     var apkCtr = new DogDoApks();
     apkCtr.do();
     //  async.waterfall([app.fun1, app.fun2], (err, resule) =>
     //  {
     //      if (err)
     //      {
     //          console.error("异步终止:" + err)
     //          return;
     //      }
     //      console.log("全部执行完成")

     //  })
 };
 app.doMain();
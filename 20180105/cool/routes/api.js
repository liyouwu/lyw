var express = require('express');
var router = express.Router();
var user = require("../model/user")

/* GET home page. */
router.post('/login', function(req, res, next) {
	user.find({
		//username:req.body.username,
		email:req.body.email,
		password:req.body.password
	},function(error,info){
		if(info.length==0){
			console.log(33333)
			res.send({result:false,message:"登录失败"})
			res.redirect("/shop")
		}
		else{
			console.log(55555)
			res.send({result:true,message:"登录成功"})
			console.log(error);
		}

	})

});

router.post('/register', function(req, res, next) {
	user.find({username:req.body.username},function(error,info){
		if(info.length==0){
			user.create({
				username:req.body.username,
				password:req.body.password,
				email:req.body.email},function(error,info){
				if(!error){
					console.log(info)
					res.send({result:true,message:"注册成功"})
				}
			})

		}
		else{
			res.send({result:false,message:"用户名已存在"})
		}
	})
});

module.exports = router;

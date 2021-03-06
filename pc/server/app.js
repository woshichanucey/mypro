
//加载Express模块
const express = require('express');

//加载CORS模块
const cors = require('cors');

//加载MySQL模块并且进行配置
const mysql = require('mysql');

//创建MySQL连接池
const pool = mysql.createPool({
    //MySQL数据库服务器的地址
    host: '127.0.0.1',
    //MySQL数据库服务器端口号
    port: 3306,
    //数据库用户的用户名
    user: 'root',
    //数据库用户的密码
    password: '',
    //数据库名称
    database: 'zhihu',
    //数据库编码方式
    charset: 'utf8',
    //最大连接数
    connectionLimit:15
});

//创建Express应用
const server = express();

//使用CORS模块
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080','http://196.168.1.3:8080']
}));

//引用body-parser模块
const bodyParser=require('body-parser');
//使用body中间件
server.use(bodyParser.urlencoded({
    extended:false
}))


//login登录路由
server.post('/login',(req,res)=>{
    var uname=req.body.username;
    var upwd=req.body.password;
    //验证用户是否存在
    var sql='SELECT id,username FROM zhihu_users WHERE username=? AND password=?';
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;

        if(result.length==0){
            res.send({message:'用户名或密码错误',code:0});
        }else{
            //用户已存在
            res.send({message:'用户登录成功',code:1,id:result[0].id,username:result[0].username});
        }
    });
});

//注册接口
server.post('/register',(req,res)=>{
    var uname=req.body.username;
    var upwd=req.body.password;
    // console.log(uname,upwd);

    //验证用户是否存在
    var sql='SELECT COUNT(*) AS count FROM zhihu_users WHERE username=?';
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result[0].count==0){
            // 插入数据
            var sql='INSERT zhihu_users(username,password) VALUES(?,MD5(?))';
            pool.query(sql,[uname,upwd],(err,result)=>{
                if(err) throw err;
                res.send({message:'用户注册成功',code:1});
            });
        }else{
            //用户已存在
            res.send({message:'用户注册失败',code:0});
        }
    });
});

// 新闻内容加载
server.get('/articles',(req,res)=>{
    //获取地址上的分类
    var type=req.query.type;

    //查找 zhihu_articles(文章表)的"全部"记录
    sql = `SELECT zhihu_articles.id,subject,description,image  FROM zhihu_articles,zhihu_category WHERE category_id = zhihu_category.id AND category_info=? LIMIT 0,3`;
    //执行SQL查找操作
    pool.query(sql,[type], (err, results) => {
        //如果发生错误,则直接抛出错误
        if (err) throw err;
        res.send({ message: '查询成功', code: 1, results: results});
    });
});

// 指定新闻的详情
server.get('/details/:id',(req,res)=>{
    var id=req.params.id;
    var sql='SELECT id,subject,content FROM zhihu_articles WHERE id=?';
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,details:result[0]});
    });
});


//监听端口
server.listen(5000);

//引入express
const express = require('express');
const router = require('./router.js')
const fs = require('fs')
 
//创建服务器
const app = express()

//添加端口监听
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})
//托管静态资源 
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

//配置模板引擎
app.set('view engine','ejs')
// 下面这句代码是进行ejs模板文件查询的默认目录配置，下面这句代码写完之后，以后所有的ejs资源都会云指定的__dirname+"/views"
app.set('views',__dirname+"/views")

//添加路由配置
//使用render函数渲染页面
// app.get('/', (req, res) => {
//  res.render('index')  
// })
//让app使用Router进行路由管理
app.use(router)
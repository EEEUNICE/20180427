//加载express模块
var express = require('express');
//加载模板
var swig = require('swig');
//加载body-parse接受前台发过来的数据
var bodyParser = require('body-parser');

var app = express();


//设置bodyparser
app.use(bodyParser.urlencoded({extended: true}));


//设置文件静态托管,s当使用public的路由就会从下面找到文件
app.use('/public', express.static(__dirname + '/public'))

//模板配置
//定义当前使用的模板引擎，
//第一个参数，模板引擎的名称，同时也是模板文本
//第二个参数解析处理模板内容的函数
app.engine('html', swig.renderFile);

//设置模板文件存放的目录，第一个必须是views，第二个是路径
app.set('views', './views');

//注册所有使用的模板引擎,第一个必须是view engine,第二个参数是和swig.engine的第一个参数必须是一致的
app.set('view engine','html');

//swig.renderFile默认是会缓存到内存，当向客户端提供数据会从缓存中去
//线上提高性能，开发开发时，模板文件改变之后，刷新会从缓存中去来，内容和上次不变
//所以要关掉
swig.setDefaults({
    cache:false
});

//首页，根目录路由
/*
*req request对象
*res response对象
*next 函数
*
* 可以把路由都放在router模块下面，就可以把下面app.get政略掉，条例惊喜，用app.use
* */
/*app.get('/', function(res, res, next) {
	//res.send('<h1>欢迎访问我的博客</h1>')
	//读取views下的指定目录文件，解析返回客户端
	//第一个参数，表示模板的文件，相对于views目录
	//第二个参数是传递给模板引擎的数据
	//相当于views/index.html
	res.render('index');
})*/


/*
*
*根据不同功能划分木块
*
**/


app.use('/', require('./routers/main'));
app.use('/issue1', require('./routers/issue1'));
app.listen(4080);

// 测试环境
var TARGET = 'http://test.finlink.net.cn:3000/asset/backstage/';

var express = require('express');
var app = express();
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.globalAgent.maxSockets = 50;

app.use(express.static('./dist/'));

app.all('/asset/backstage/*', function (req, res, next) {
    console.log(req);
    return proxy.web(req, res, { target: TARGET });
    // next();
});

app.get('/', function(req, res){
    res.send('Hello cajl');
});

app.listen(8070, function(err) {
    if(err) {
        throw err;
        return;
    }
    console.log('已成功监听8070端口。')
});
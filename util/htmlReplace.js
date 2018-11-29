var fs = require( 'fs' );
const glob = require('glob');
/**
 * html文件替换
 * @param src
 * @param dst
 */
var callbackFile = function( src,dst, name ){
    fs.readFile(src,'utf8',function(error,data){
        if(error){
            console.log(error);
            return false;
        }
        let regCss = new RegExp("\/css\/"+name+"",'g');
        let regJs = new RegExp("\/js\/"+name+"",'g');
        let htmlContent = data.toString().replace(regCss,`\.\/css\/${name}`).replace(regJs,`\.\/js\/${name}`);
        fs.writeFile(dst,htmlContent,'utf8',function(error){
            if(error){
                console.log(error);
                return false;
            }
            // console.log('html重新写入成功');
            fs.unlink(src,function () {
              //  console.log('html删除成功')
            })
        })
    })
};
// 复制目录
glob.sync( './dist/js/*.js').forEach((filepath,name) => {
    let fileNameList = filepath.split('.');
    let fileName = fileNameList[1].split('/')[3];// 多页面页面目录
    let thisDirectory = `./dist/${fileName}/${fileName}.html`;// 多页面JS文件地存放址
    let changeDirectory = `./dist/${fileName}/index.html`;// 多页面JS文件地存放址
    if(!fileName.includes('chunk-vendors')){
        callbackFile(thisDirectory,changeDirectory,fileName)
    }
});

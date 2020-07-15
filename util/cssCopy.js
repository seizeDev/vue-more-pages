var fs = require('fs')
const glob = require('glob')
/**
 * css文件拷贝
 * @param src
 * @param dst
 */
var callbackFile = function (src, dst) {
  fs.readFile(src, 'utf8', function (error, data) {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return false
    }
    let regImage = new RegExp('../img/', 'g');
    let cssContent = data.toString().replace(regImage, `../../img/`);
    fs.writeFile(dst, cssContent, 'utf8', function (error) {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        PromiseRejectionEvent(error)
        return false
      }
      // console.log('CSS写入成功')
      fs.unlink(src, function () { // css删除成功
      })
    })
  })
}
// 复制目录
glob.sync('./dist/css/*.css').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3]// 多页面页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./dist/${fileName}/css`// 多页面JS文件地存放址
  if (!fileName.includes('chunk-vendors')) {
    /* eslint-disable-next-line */
    fs.exists(changeDirectory, function (exists) {
      if (exists) {
        // console.log(`${fileName}下CSS文件已经存在`)
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
      } else {
        fs.mkdir(changeDirectory, function () {
          callbackFile(filepath, `${changeDirectory}/${copyName}`)
          //   console.log(`${fileName}下CSS文件创建成功`)
        })
      }
    })
  }
})

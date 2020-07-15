let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();
module.exports = {
    pages,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/mydata/'
    : '/',
}

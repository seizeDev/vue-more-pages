# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


注意:
如果修改publicPath前面路径的话，需要对应修改util/htmlReplace.js 里面的 let regCss = new RegExp('/dist/css/' + name + '', 'g')；let regJs = new RegExp('/dist/js/' + name + '', 'g')；dist 改成 对应的名字

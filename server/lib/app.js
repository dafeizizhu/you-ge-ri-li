var koa = require('koa')
var app = koa()

app.use(function *(next) {
  this.body = 'Hello by KOA'
})

app.listen(8080)

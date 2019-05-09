const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = `Hello World\n${new Date()}`
})

app.listen(8888)

console.log(`${new Date()} - server listening on 127.0.0.1:8888`)


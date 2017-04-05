import Koa from "koa"
import bodyParser from "koa-bodyparser"
import koaRouter from "koa-router"
import serve from "koa-static"
import mount from "koa-mount"
import send from "koa-send"

const app = new Koa()

app.use(mount("/assets", serve("assets")))
app.use(bodyParser())

const router = koaRouter()

app.use(router.routes())
   .use(router.allowedMethods())

app.use(async ctx => {
  await send(ctx, "index.html")
})

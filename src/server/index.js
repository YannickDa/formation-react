import Koa from "koa"
import bodyParser from "koa-bodyparser"
import koaRouter from "koa-router"
import serve from "koa-static"
import mount from "koa-mount"

const app = new Koa()

app.use(mount("/assets", serve("assets")))
app.use(bodyParser())

const router = koaRouter()

app.use(router.routes())
   .use(router.allowedMethods())

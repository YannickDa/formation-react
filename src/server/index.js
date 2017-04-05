import Koa from "koa"
import bodyParser from "koa-bodyparser"
import koaRouter from "koa-router"
import serve from "koa-static"
import mount from "koa-mount"
import send from "koa-send"

import { StaticRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "store/configureStore"

import indexHtml from "./index.html"

const todos = [
  { label: "Todo 1", completed: false }
]

const app = new Koa()

app.use(mount("/assets", serve("assets")))
app.use(bodyParser())

const router = koaRouter()

router.get("/todos", async ctx => {
  ctx.body = todos
})

router.post("/todo", async ctx => {
  const todo = ctx.request.body
  todos.push(todo)
  ctx.body = null
})

router.put("/todo/completed", async ctx => {
  const todo = ctx.request.body

  let idx = false
  let i = 0
  while (i < todos.length && idx === false) {
    if (todo.label === todos[i].label) {
      idx = i
    }
    ++i
  }

  if (idx !== false) {
    todos[idx].completed = true
  }
  ctx.body = null
})

app.use(router.routes())
   .use(router.allowedMethods())

app.use(async ctx => {
  const location = ctx.request.url
  const context = {}

  const store = configureStore({
    todo: {
      todos
    }
  })

  const component = (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
      </StaticRouter>
    </Provider>
  )
})

app.use(async ctx => {
  await send(ctx, indexHtml)
})

app.listen(3000, err => {
  if (err) {
    console.error("Error when running server", err)
    return
  } 

  console.log("Server running on port 3000")
})

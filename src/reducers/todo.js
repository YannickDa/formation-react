import { ADD_TODO, COMPLETE_TODO } from "../actions/todo"

const initialState = {
  todos: []
}

export default (todo = initialState, action) => {
  const { type, data } = action
  switch (type) {
    case ADD_TODO:
      return Object.assign({}, todo, {
        todos: [
          ...todo.todos,
          { label: data, completed: false }
        ]
      })
    case COMPLETE_TODO:
      return Object.assign({}, todo, {
        todos: todo.todos.map(t => {
          if (t.label === data.label) {
            t.completed = true
          }
          return t
        })
      })
    default:
      return todo
  }
}

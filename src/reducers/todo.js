import { ADD_TODO } from "../actions/todo"

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
    default:
      return todo
  }
}

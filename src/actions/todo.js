export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const SET_TODOS = "SET_TODOS"

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    data: todo
  }
}

export const completeTodo = todo => {
  return {
    type: COMPLETE_TODO,
    data: todo
  }
}

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    data: todos
  }
}

export const getTodos = () => {
  return dispatch => {
    return fetch("/todos").then(response =>
      response.json().then(todos =>
        dispatch(setTodos(todos))
      )
    )
  }
}

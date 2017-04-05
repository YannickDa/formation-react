export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"

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

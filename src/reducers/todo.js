const initialState = {
  todos: []
}

export default (todo = initialState, action) => {
  const { type, data } = action
  switch (type) {
    default:
      return todo
  }
}

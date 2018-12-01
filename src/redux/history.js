export default (state = [], action) => {
  switch (action.type) {
    case 'record':
      return [...state, action.payload]

    default:
      return state
  }
}

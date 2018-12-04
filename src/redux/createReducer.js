export default (reducerFunction, reducerName) => (state, action) => {
  const { name } = action
  const isInitializationCall = state === undefined
  return name !== reducerName && !isInitializationCall
    ? state
    : reducerFunction(state, action)
}

export default (reducerFunction, reducerName) => (state, action) => {
  const { player } = action
  const isInitializationCall = state === undefined
  return player !== reducerName && !isInitializationCall
    ? state
    : reducerFunction(state, action)
}

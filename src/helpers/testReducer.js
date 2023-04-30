export default (reducer) =>
  ({ state, action, expected }) => {
    expect(reducer(state, action)).toEqual(expected)
  }

export const enter = (bank) => ({ type: "enter", bank })
export const leave = () => (dispatch, getState) => {
  const { history } = getState()
  const { games } = history
  dispatch({ type: "leave", games })
}

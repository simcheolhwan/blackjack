import migrate from './migrate'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    const state = JSON.parse(serializedState)
    return state.v === 2 ? state : migrate(state) || undefined
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {}
}

export const removeState = () => {
  try {
    localStorage.removeItem('state')
  } catch (err) {}
}

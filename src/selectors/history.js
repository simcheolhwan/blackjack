export default (n = 0, debt) => history => {
  const reduceMax = (acc, { chips, debt }) => [...acc, chips, debt]
  const { length } = history
  const max = length ? Math.max(...history.reduce(reduceMax, [])) : 0
  const summary = [length + ' Games', 'Best ' + max, debt && 'Dept ' + debt]
  return {
    summary: summary.filter(Boolean).join(' | '),
    list: history.slice(-1 * n),
    max
  }
}

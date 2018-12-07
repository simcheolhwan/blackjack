export default history => {
  const reduceMax = (acc, { chips, debt }) => [...acc, chips, debt]
  const { length } = history
  const max = length ? Math.max(...history.reduce(reduceMax, [])) : 0
  const summary = [length + ' Games', 'Best ' + max]
  return { summary: summary.join(' | '), list: history, max }
}

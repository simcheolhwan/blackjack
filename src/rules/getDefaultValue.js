export default card => Number(card) || (card === 'A' && 1) || 10

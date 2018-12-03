export const UNIT = 5
export const SEED = 100
export const DECK = 6
export const HISTORY = 9999

const BET = [UNIT * 1, UNIT * 2, UNIT * 5, UNIT * 10, UNIT * 20]
const multiplyBets = n => BET.map((b, i) => (i ? b * n : b))
export const getBets = chips =>
  chips < 800
    ? BET
    : chips < 1200
    ? multiplyBets(2)
    : chips < 2000
    ? multiplyBets(3)
    : chips < 4000
    ? multiplyBets(5)
    : chips < 6000
    ? multiplyBets(10)
    : chips < 8000
    ? multiplyBets(15)
    : chips < 10000
    ? multiplyBets(20)
    : multiplyBets(25)

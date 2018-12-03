import getDeck from './getDeck'
import shuffle from './shuffle'
import { DECK } from '../constants'
export default (n = DECK) => shuffle(getDeck(n))

import axios from 'axios'
import {
  GET_LIGHTS_URL,
  TOGGLE_URL,
  SET_STATE_URL,
  BREATHE_URL,
  HEADERS
} from './constants'

export const toggleLight = async () => {
  await axios.post(TOGGLE_URL, null, { headers: HEADERS })
}
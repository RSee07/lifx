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

export const turnLightOffTimed = async (time) => {
  axios.put(
    SET_STATE_URL,
    {
      power: 'off',
      duration: time,
      brightness: 0
    },
    { headers: HEADERS }
  )
}

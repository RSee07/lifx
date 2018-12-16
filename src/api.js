import axios from 'axios'
import {
  GET_LIGHTS_URL,
  TOGGLE_URL,
  SET_STATE_URL,
  BREATHE_URL,
  HEADERS
} from './constants'

export const getLightStatus = async () => {
  const lightMessage = await axios.get(GET_LIGHTS_URL, { headers: HEADERS })
  const { power, brightness, color: { hue, saturation, kelvin} } = lightMessage.data[0]

  return {
    power: power === 'on' ? true : false,
    brightness,
    hue,
    saturation,
    kelvin
  }
}

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

export const breatheLight = async () => {
  axios.post(
    BREATHE_URL,
    {
      color: '#FF0000'
    },
    { headers: HEADERS }
  )
}

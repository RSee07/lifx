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
    brightness: Math.round(brightness*100),
    hue,
    saturation,
    kelvin
  }
}

export const toggleLight = async () => {
  const response = await axios.post(TOGGLE_URL, null, { headers: HEADERS })

  return response.data.results[0].status

  // status = "ok", "timed out "
}

export const turnLightOffTimed = async (time) => {
  const response = await axios.put(
    SET_STATE_URL,
    {
      power: 'off',
      duration: time,
      brightness: 0
    },
    { headers: HEADERS }
  )

  return response.data.results[0].status
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

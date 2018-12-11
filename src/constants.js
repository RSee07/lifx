// Unique authorisation key
const API_TOKEN = 'c3388f7729cb9c1364701c49434f6a4e860ec761874ec9d228042afb017a15ae'

// LIFX API Endpoints
export const GET_LIGHTS_URL = 'https://api.lifx.com/v1/lights/all' // GET
export const TOGGLE_URL = 'https://api.lifx.com/v1/lights/all/toggle' // POST
export const SET_STATE_URL = 'https://api.lifx.com/v1/lights/all/state' // PUT
export const BREATHE_URL = 'https://api.lifx.com/v1/lights/all/effects/breathe' // POST

// Headers required to access endpoints
export const HEADERS = {
  Authorization: `Bearer ${API_TOKEN}`
}
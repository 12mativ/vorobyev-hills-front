import axios from "axios"

export const getAirplanes = async () => {
  return await axios.get("http://localhost:3000/flight")
}
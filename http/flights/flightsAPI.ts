import axios from "axios"

export const getFlights = async () => {
  return await axios.get("http://localhost:3000/flight")
}
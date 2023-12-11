'use client'

import React, {useEffect, useState} from "react";
import Flights from "@/components/Flights";
import ChosenFlight from "@/components/ChosenFlight";
import {getFlights} from "@/utils/api";

export interface Flight {
  airline_name: string
  takeoff_date: string
  takeoff_time: number
  flight_duration: number
}

export default function FlightMenu() {
  const [flights, setFlights] = useState<Flight[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [chosenFlight, setChosenFlight] = useState<Flight | undefined>(undefined)

  useEffect(() => {
    getFlights().then(res => {
      setFlights(res.data.flights)
    }).finally(() => setIsLoading(false))
  }, [])

  return (
    chosenFlight
      ? (
        <ChosenFlight setChosenFlight={setChosenFlight} {...chosenFlight} />
      )
      : (<Flights
        isLoading={isLoading}
        flights={flights}
        setChosenFlight={setChosenFlight}
      />)
  )
}
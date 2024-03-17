"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addFlights } from "@/lib/features/flights/flightsSlice";
import { useEffect } from "react";

const Page = () => {
  const flights = useAppSelector((state) => state.flightsReducer.flights);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //запрос к бэку
    dispatch(
      addFlights([
        {
          id: 1,
          airplaneName: "Суперджет1",
          startDate: "22",
          endDate: "44",
          startCity: "Москва",
          endCity: "Владивосток",
        },
        {
          id: 2,
          airplaneName: "Суперджет2",
          startDate: "22",
          endDate: "44",
          startCity: "Москва",
          endCity: "Владивосток",
        },
        {
          id: 3,
          airplaneName: "Суперджет3",
          startDate: "22",
          endDate: "44",
          startCity: "Москва",
          endCity: "Владивосток",
        },
      ])
    );
  }, []);

  return (
    <div>
      {flights.map((flight) => (
        <p key={flight.id}>{flight.airplaneName}</p>
      ))}
    </div>
  );
};

export default Page;

"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addFlights } from "@/lib/features/flights/flightsSlice";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";


const Page = () => {
  const flights = useAppSelector((state) => state.flightsReducer.flights);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    //запрос к бэку
    dispatch(
      addFlights([
        {
          id: 1,
          airplaneName: "Суперджет1",
          startDate: "22.11.2024",
          endDate: "02.12.2024",
          startCity: "Москва",
          endCity: "Владивосток",
        },
        {
          id: 2,
          airplaneName: "Суперджет2",
          startDate: "22.11.2024",
          endDate: "02.12.2024",
          startCity: "Москва",
          endCity: "Владивосток",
        },
        {
          id: 3,
          airplaneName: "Суперджет3",
          startDate: "22.11.2024",
          endDate: "02.12.2024",
          startCity: "Москва",
          endCity: "Владивосток",
        },
      ])
    );
  }, []);

  return (
    <div>
      <button
        onClick={() => router.push('/')}
        className="flex text-white items-center gap-x-2 group mb-3 self-start text-lg rounded-lg font-semibold"
        type='button'
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className="flex flex-row justify-center items-center overflow-y-auto h-screen">
        {flights.map((flight) => (
          <button
            key={flight.id}
            className="bg-sky-600 rounded-lg p-3 md:p-6 gap-y-6 flex flex-col w-[90%] md:w-[80%] lg:w-[55%] items-center m-2 h-60 transition hover:bg-sky-300"
          >
            <p className="text-2xl font-bold text-white text-center">{flight.airplaneName}</p>
            <p className="text-xl font-semibold text-white text-center mt-auto">{flight.startDate} - {flight.endDate}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;

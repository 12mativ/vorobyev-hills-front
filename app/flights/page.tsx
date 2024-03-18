"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addFlights } from "@/lib/features/flights/flightsSlice";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";


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
        {
          id: 4,
          airplaneName: "Суперджет4",
          startDate: "22.11.2024",
          endDate: "02.12.2024",
          startCity: "Москва",
          endCity: "Владивосток",
        },
      ])
    );
  }, []);

  return (
    <div className="p-3">
      <button
        onClick={() => router.push('/')}
        className="flex text-white items-center gap-x-2 group mb-3 self-start text-lg rounded-lg font-semibold"
        type='button'
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className="flex flex-row flex-wrap justify-start items-start overflow-y-auto h-full w-full">
        {flights.map((flight) => (
          <Link
            href="#"
            key={flight.id}
            className="bg-sky-600 rounded-lg p-6 gap-y-6 flex flex-col w-full sm:w-[46.1%] md:w-[46.7%] lg:w-[30.9%] xl:w-[31.4%] 2xl:w-[23.4%] items-center m-3 h-60 transition hover:bg-sky-300"
          >
            <p className="text-2xl font-bold text-white text-center">{flight.airplaneName}</p>
            <p className="text-xl font-semibold text-white text-center mt-auto">{flight.startDate} - {flight.endDate}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;

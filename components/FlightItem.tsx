import React from "react";
import {Flight} from "@/app/flights-menu/page";
import {IoAirplane} from "react-icons/io5";
import {floatToTime} from "@/utils/time-translations";

const FlightItem: React.FC<Flight> = ({
                                        airline_name,
                                        takeoff_date,
                                        takeoff_time,
                                        flight_duration,
                                        setChosenFlight,
                                      }) => {
  return (
    <div className='bg-white w-[98%] md:w-[60%] rounded-lg flex
      justify-between items-center p-3 hover:scale-[1.01] transition cursor-pointer'
         onClick={() => {
           setChosenFlight({
             airline_name: airline_name,
             takeoff_date: takeoff_date,
             takeoff_time: takeoff_time,
             flight_duration: flight_duration,
           })
         }}
    >
      <div className='flex md:items-center md:flex-row md:gap-x-3 flex-col'>
        <IoAirplane className='w-[50px] h-[50px] text-zinc-500/30'/>
        <p className='text-xl font-bold text-zinc-500/70'>{airline_name}</p>
      </div>

      <div className='flex flex-col gap-y-1 gap-x-0 lg:gap-x-4 lg:flex-row'>
        <div className=''>
          <span className='text-sm text-zinc-300'>Дата:</span>
          <p className='text-zinc-500'>{takeoff_date}</p>
        </div>

        <div>
          <span className='text-sm text-zinc-300'>Время отправки:</span>
          <p className='text-zinc-500'>{floatToTime(takeoff_time)}</p>
        </div>

        <div>
          <span className='text-sm text-zinc-300'>Время полета:</span>
          <p>{floatToTime(flight_duration, true)}</p>
        </div>
      </div>

    </div>
  )
}

export default FlightItem
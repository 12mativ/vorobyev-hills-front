import FlightItem from "@/components/FlightItem";
import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import {useRouter} from "next/navigation";
import {Flight} from "@/app/flights-menu/page";
import {PiSmileySad} from "react-icons/pi";

interface FlightsProps {
  isLoading: boolean
  flights: Flight[]
  setChosenFlight: (value: (((prevState: (Flight | undefined)) => (Flight | undefined)) | Flight | undefined)) => void
}

const Flights: React.FC<FlightsProps> = ({isLoading, flights, setChosenFlight}) => {
  const router = useRouter()

 return (
   <div>
     <button
       onClick={() => router.push('/')}
       className="text-white p-3 mb-2 self-start
        text-sky-600 rounded-lg font-semibold"
       type='button'
     >
       <IoIosArrowBack size={40} />
     </button>
     <div className='w-full flex flex-col items-center gap-y-3 p-3'>
       {!(!isLoading && flights.length === 0) && (
         <h3 className='uppercase font-bold text-2xl text-neutral-100/90'>Выберите рейс...</h3>
       )}
       {isLoading && (
         [...Array(10)].map((_, index) => (
           <div key={index} className='h-[130px] lg:h-[70px] w-[98%] md:w-[60%]
            flex justify-between items-center animate-pulse bg-neutral-50/50 rounded-lg p-3'>
             <div className='bg-neutral-100/50 w-[45px] h-[45px] rounded-md'></div>
             <div className='flex flex-col gap-y-2 gap-x-0 lg:gap-x-4 lg:flex-row'>
               <div className='flex flex-col gap-y-1'>
                 <div className='hidden lg:block bg-neutral-100/50 w-[70px] h-[10px] rounded-md'></div>
                 <div className='bg-neutral-100/50 w-[130px] h-[10px] rounded-md'></div>
               </div>

               <div className='flex flex-col gap-y-1'>
                 <div className='hidden lg:block bg-neutral-100/50 w-[70px] h-[10px] rounded-md'></div>
                 <div className='bg-neutral-100/50 w-[130px] h-[10px] rounded-md'></div>
               </div>

               <div className='flex flex-col gap-y-1'>
                 <div className='hidden lg:block bg-neutral-100/50 w-[70px] h-[10px] rounded-md'></div>
                 <div className='bg-neutral-100/50 w-[130px] h-[10px] rounded-md'></div>
               </div>
             </div>
           </div>
         ))
       )}
       {!isLoading && flights.length === 0 && (
         <div className='flex flex-col items-center text-green-200'>
           <p className='text-xl font-bold'>Полетов не найдено.</p>
           <PiSmileySad size={100} />
         </div>
       )}
       {flights.map((flight, index) => {
         return (
           <FlightItem key={index} setChosenFlight={setChosenFlight} {...flight} />
         )
       })}
     </div>
   </div>
 )
}

export default Flights
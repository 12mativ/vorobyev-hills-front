import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import {useRouter} from "next/navigation";

interface MainFormProps {
  isLoading: boolean
  register: any
  errors: any
  setIsFormPageChanged: (state: boolean) => void
  isValid: boolean
}

const MainForm = ({isLoading, register, errors, setIsFormPageChanged, isValid}: MainFormProps) => {
  const router = useRouter()

  return (
    <div className='w-full flex flex-col justify-center md:justify-between gap-y-3  '>
      <button
        onClick={() => router.push('/')}
        className="flex text-white items-center gap-x-2 group mb-3 self-start text-lg text-sky-600 rounded-lg font-semibold"
        type='button'
        disabled={isLoading}
      >
        <IoIosArrowBack size={30} />
      </button>
      <h3
        className="text-2xl font-bold text-white text-center"
      >
        ВВЕДИТЕ ДЕТАЛИ РЕЙСА
      </h3>

      <div className="flex w-full flex-col gap-y-2 font-medium text-white">
        <label htmlFor='airlineName'>Авиакомпания</label>
        <select
          {...register("airlineName")}
          id="airlineName"
          className="w-full p-2 mb-3 bg-sky-200 text-sky-600 rounded-lg text-lg font-semibold"
        >
          <option value="Аэрофлот">Аэрофлот</option>
        </select>
        <p className='text-red-500'>{errors.airlineName?.message}</p>
      </div>
      <div className="font-medium text-white flex flex-col md:w-[80%] md:w-full md:flex-row justify-between">
        <div className="flex flex-col gap-y-4">

          <div className='flex flex-col gap-y-2'>
            <label htmlFor='businessAmount'>
              Количество пассажиров в бизнес-классе:
            </label>
            <input
              id='businessAmount'
              type='number'
              {...register("businessAmount")}
              className="bg-sky-200 rounded-lg text-sky-600 p-1"/>
            <p className='text-red-400'>{errors.businessAmount?.message}</p>
          </div>

          <div className='flex flex-col gap-y-2'>
            <label htmlFor='economyAmount'>
              Количество пассажиров в эконом-классе:
            </label>
            <input
              id='economyAmount'
              type='number'
              {...register("economyAmount")}
              className=" bg-sky-200 rounded-lg  text-sky-600 p-1"
            />
            <p className='text-red-400'>{errors.economyAmount?.message}</p>
          </div>

          <div className='flex flex-col gap-y-2'>
            <label htmlFor='flightDuration'>
              Время полета:
            </label>
            <label htmlFor="flightDuration" className='text-sm text-slate-300'>
              * В часах
            </label>
            <input
              id='flightDuration'
              type='number'
              {...register("flightDuration")}
              className="bg-sky-200 rounded-lg  text-sky-600 p-1"
            />
            <p className='text-red-400'>{errors.flightDuration?.message}</p>
          </div>

        </div>
        <div className="flex flex-col gap-y-4">

          <div className='flex flex-col gap-y-2'>
            <label htmlFor='takeoffTime'>
              Время взлета:
            </label>
            <input
              type="time"
              id='takeoffTime'
              {...register("takeoffTime")}
              className="bg-sky-200 rounded-lg text-sky-600 p-1"
            />
            <p className='text-red-400'>{errors.takeoffTime?.message}</p>
          </div>

          <div className='flex flex-col gap-y-2'>
            <label htmlFor='landingTime'>
              Время посадки:
            </label>
            <input
              type="time"
              id='landingTime'
              {...register("landingTime")}
              className="bg-sky-200 rounded-lg text-sky-600 p-1"
            />
            <p className='text-red-400'>{errors.landingTime?.message}</p>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsFormPageChanged(true)}
          className="group p-3 bg-sky-200 text-lg text-sky-600 rounded-lg font-semibold disabled:cursor-not-allowed"
          type='button'
          disabled={isLoading || !isValid}
        >
          Далее
        </button>
      </div>
    </div>
  )
}

export default MainForm
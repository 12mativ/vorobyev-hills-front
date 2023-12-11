'use client'

import React, {useState} from "react";
import {Flight} from "@/app/flights-menu/page";
import {floatToTime} from "@/utils/time-translations";
import {IoIosArrowBack} from "react-icons/io";
import {IoAirplane} from "react-icons/io5";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"
import {FiLoader} from "react-icons/fi";
import {AiOutlineArrowRight} from "react-icons/ai";
import {getMenu} from "@/utils/api";
import {MenuData} from "@/app/menu/page";
import MenuDescription from "@/components/MenuDescription";

const schema = yup
  .object({
    businessAmount: yup
      .number()
      .typeError("Обязательно для заполнения")
      .required("Обязательно для заполнения")
      .min(0, "Количество пассажиров должно быть положительным"),
    economyAmount: yup
      .number()
      .typeError("Обязательно для заполнения")
      .required("Обязательно для заполнения")
      .min(0, "Количество пассажиров должно быть положительным"),
  })
  .required()

const ChosenFlight: React.FC<Flight> = ({
                                          flight_duration,
                                          takeoff_date,
                                          takeoff_time,
                                          airline_name,
                                          setChosenFlight
                                        }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [menuData, setMenuData] = useState<MenuData | null>(null)

  const {
    register,
    formState: {errors, isValid = false},
    handleSubmit,
  } = useForm({mode: "onChange", resolver: yupResolver(schema)})


  const onSubmit = (data: any) => {
    const formattedData = {
      airline_name: airline_name,
      flight_duration: flight_duration,
      takeoff_time: takeoff_time,
      class_of_service_data: [
        {type: "economy", amount: data.economyAmount},
        {type: "business", amount: data.businessAmount}
      ],
      special_menu_codes: []
    }

    setIsLoading(true)
    getMenu(formattedData).then(res => {
      setIsSubmitted(true)
      setMenuData(res?.data)
    }).finally(() => setIsLoading(false));
  }

  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={() => setChosenFlight(undefined)}
        className="text-white p-3 mb-2 self-start
        text-sky-600 rounded-lg font-semibold"
        type='button'
      >
        <IoIosArrowBack size={40}/>
      </button>

      <div className='bg-white w-[95%] md:w-[60%] rounded-lg p-3 mb-3 flex flex-col items-center gap-y-5'>
        <div className='flex justify-between items-center w-full border-dashed border-b-2 pb-5'>
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

        {isSubmitted && menuData ? <MenuDescription menuData={menuData} isLoading={isLoading} setIsSubmitted={setIsSubmitted} /> :
          (<form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='economyAmount'>
                Количество пассажиров в эконом-классе:
              </label>
              <input
                id='economyAmount'
                type='number'
                {...register("economyAmount")}
                className="bg-zinc-200/50 rounded-lg p-2"
              />
              <p className='text-red-400 pb-3'>{errors.economyAmount?.message}</p>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label htmlFor='businessAmount'>
                Количество пассажиров в бизнес-классе:
              </label>
              <input
                id='businessAmount'
                type='number'
                {...register("businessAmount")}
                className="bg-zinc-200/50 rounded-lg p-2"/>
              <p className='text-red-400 pb-3'>{errors.businessAmount?.message}</p>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="group p-3 bg-sky-200 text-lg text-sky-600 rounded-lg font-semibold"
                type='submit'
                disabled={isLoading}
              >
                {isLoading
                  ? (
                    <div className='flex gap-x-2 items-center'>
                      <p>Загрузка...</p>
                      <FiLoader size={24} className='animate-spin'/>
                    </div>
                  )
                  : (
                    <div className='flex gap-x-1 items-center'>
                      <p>Отправить</p>
                      <AiOutlineArrowRight size={24} className='group-hover:translate-x-2 transition'/>
                    </div>
                  )
                }
              </button>
            </div>
          </form>)}
      </div>
    </div>
  )
}

export default ChosenFlight
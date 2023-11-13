'use client'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import React from "react";
import {FlightFormProps} from "@/app/menu/page";
import {FiLoader} from "react-icons/fi";
import {AiOutlineArrowRight} from "react-icons/ai";

interface ClassOfServiceData {
  type: string;
  amount: number;
}

interface FormattedData {
  airline_name: string;
  flight_duration: number;
  takeoff_time: number;
  landing_time: number;
  class_of_service_data: ClassOfServiceData[];
  special_menu_codes: any[];
}

const schema = yup
  .object({
    airlineName: yup
      .string()
      .required()
      .oneOf(["Аэрофлот"])
      .label("airlineName"),
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
    flightDuration: yup
      .number()
      .typeError("Обязательно для заполнения")
      .required("Обязательно для заполнения")
      .moreThan(0, "Время полета не может быть нулевым")
      .positive("Время полета должно быть положительным"),
    takeoffTime: yup
      .string()
      .required("Обязательно для заполнения"),
    landingTime: yup
      .string()
      .required("Обязательно для заполнения")
  })
  .required()

function convertTimeToFloat(timeString: string) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours + minutes / 60;
}

const getMenu = async (body: FormattedData) => {
  try {
    return await axios.post('https://air-food.onrender.com/menu', {
      ...body
    });
  } catch (error) {
    console.error(error);
  }
}

export default function FlightForm({setIsSubmitted, setMenuData, setIsLoading, isLoading}: FlightFormProps) {

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({resolver: yupResolver(schema)})

  const onSubmit = (data: any) => {
    const formattedData = {
      airline_name: data.airlineName,
      flight_duration: data.flightDuration,
      takeoff_time: convertTimeToFloat(data.takeoffTime),
      landing_time: convertTimeToFloat(data.landingTime),
      class_of_service_data: [
        { type: "economy", amount: data.economyAmount },
        { type: "business", amount: data.businessAmount }
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form bg-sky-600 rounded-lg p-3 md:p-6 gap-y-6 flex flex-col w-[90%] md:w-[80%] lg:w-[55%] items-center"
    >
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
              placeholder='Количество пассажиров в бизнес-классе'
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

          <div className='flex flex-col gap-y-2'>
            <p>
              Специальное меню:
            </p>
            <select name="spmenu" className="p-1 bg-sky-200 text-sky-600 rounded-lg font-semibold ">
              <option value="value1" disabled selected>Выберите меню</option>
              <option value="value2">Кашерное</option>
              <option value="value2">Халяль</option>
            </select>
          </div>

          <div className='flex flex-col gap-y-2'>
            <p className="">
              Количество:
            </p>
            <input type="number" name="countmenu" min={0} max={350}
                   className=" bg-sky-200 rounded-lg  text-sky-600 p-1"/>
          </div>

        </div>
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
                <FiLoader size={24} className='animate-spin'/>
                <p>Загрузка...</p>
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
    </form>
  )
}


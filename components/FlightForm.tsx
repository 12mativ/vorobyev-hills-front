'use client'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import React, {useState} from "react";
import {FlightFormProps} from "@/app/menu/page";
import SpecialMenu from "@/components/SpecialMenu";
import MainForm from "@/components/MainForm";
import {v4 as uuidv4} from 'uuid';
import {convertTimeToFloat} from "@/utils/time-translations";
import {getMenu} from "@/utils/api";

export interface SelectedMenu {
  id: string
  value: string
  amount: number
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



const menus = [
  {name: 'Выберите тип меню', value: ""},
  {name: 'Диабетическое', value: "DBML"},
  {name: 'Питание с низким содержанием молочного белка', value: "NLML"},
  {name: 'Низкокалорийное питание', value: "LCML"},
  {name: 'Питание без добавленной соли', value: "LSML"},
  {name: 'Постное', value: "VJML"},
  {name: 'Мусульманское', value: "MOML"},
  {name: 'Халяльное', value: "HOML"},
  {name: 'Кошерное', value: "KSML"},
  {name: 'Вегетарианское', value: "VLML"},
  {name: 'Детский набор', value: "CHML"},
  {name: 'Детское питание для грудных младенцев', value: "BBML"},
]

export default function FlightForm({setIsSubmitted, setMenuData, setIsLoading, isLoading}: FlightFormProps) {

  const [selectedMenus, setSelectedMenus] = useState<SelectedMenu[]>([])
  const [availableMenus, setAvailableMenus] = useState<typeof menus>(menus)
  const [isFormPageChanged, setIsFormPageChanged] = useState(false)

  const handleAddSelectedMenus = (id: string = uuidv4(), value: string = '', amount: number = 0) => {
    const isObject = selectedMenus.some(obj => obj.id === id)
    if (!isObject) {
      setSelectedMenus((prevState) => {
        return [...prevState, {id: id, value: '', amount: 0}]
      })
      return null
    }

    const newData = {value: value, amount: amount}
    const updatedArray = selectedMenus.map(obj => (obj.id === id ? { ...obj, ...newData } : obj));

    setSelectedMenus(updatedArray);
  }

  const {
    register,
    formState: {errors, isValid = false },
    handleSubmit,
  } = useForm({mode: "onChange", resolver: yupResolver(schema)})

  const onSubmit = (data: any) => {
    const specialMenus = selectedMenus.map(item => {
      return {'code': item.value, 'amount': item.amount}
    })
    const formattedData = {
      airline_name: data.airlineName,
      flight_duration: data.flightDuration,
      takeoff_time: convertTimeToFloat(data.takeoffTime),
      class_of_service_data: [
        { type: "economy", amount: data.economyAmount },
        { type: "business", amount: data.businessAmount }
      ],
      special_menu_codes: specialMenus.length !== 0 ? specialMenus : []
     }
    console.log(formattedData)
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
      {isFormPageChanged
        ? (
          <SpecialMenu
            isLoading={isLoading}
            setIsFormPageChanged={setIsFormPageChanged}
            selectedMenus={selectedMenus}
            availableMenus={availableMenus}
            handleAddSelectedMenus={handleAddSelectedMenus}
          />
        )
        : (
          <MainForm
            isLoading={isLoading}
            register={register}
            errors={errors}
            setIsFormPageChanged={setIsFormPageChanged}
            isValid={isValid}
          />
        )
      }
    </form>
  )
}




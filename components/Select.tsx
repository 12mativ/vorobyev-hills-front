'use client'

import Link from "next/link"

export default function Select() {
    return (
        <div className="bg-sky-600 rounded-lg p-6 flex flex-col">
            <p className="text-2xl font-medium text-white pb-3 flex justify-center items-center">
                ВВЕДИТЕ ДЕТАЛИ РЕЙСА
            </p>
            <div className="flex flex-col">
                <select name="aircompany" className=" p-2 mb-3 bg-sky-200 text-sky-600 rounded-lg text-lg font-semibold ">
                    <option value="value1" disabled selected>Выберите авиакомпанию</option>
                    <option value="value2">Аэрофлот</option>
                </select>
            </div>
            <div className="font-medium text-white flex flex-row gap-x-20 ">
                <div className="flex flex-col">
                    <p className="">
                        Количество пассажиров в бизнес-классе:
                    </p>
                    <input type="number" name="passengers bui" min={0} max={350} className=" bg-sky-200 rounded-lg  text-sky-600 p-1" />
                    <p className="">
                        Количество пассажиров в эконом-классе:
                    </p>
                    <input type="number" name="passengers eco" min={0} max={350} className=" bg-sky-200 rounded-lg  text-sky-600 p-1" />
                    <p className="">
                        Время полета:
                    </p>
                    <input type="number" name="time" min={0} max={20} className=" bg-sky-200 rounded-lg  text-sky-600 p-1" />
                </div>
                <div className="flex flex-col">
                    <p className="">
                        Время взлета:
                    </p>
                    <input type="time" name="appt" className=" bg-sky-200 rounded-lg text-sky-600 p-1" />
                    <p className="">
                        Время посадки:
                    </p>
                    <input type="time" name="appt" className=" bg-sky-200 rounded-lg text-sky-600 p-1" />
                    <p>
                        Специальное меню:
                    </p>
                    <select name="spmenu" className="p-1 bg-sky-200 text-sky-600 rounded-lg font-semibold ">
                        <option value="value1" disabled selected>Выберите меню</option>
                        <option value="value2">Кашерное</option>
                        <option value="value2">Халяль</option>
                    </select>
                    <p className="">
                        Количество:
                    </p>
                    <input type="number" name="countmenu" min={0} max={350} className=" bg-sky-200 rounded-lg  text-sky-600 p-1" />

                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link href = '/recomendation'>
                    <button className="p-2 bg-sky-200 text-sky-600 rounded-lg font-semibold ">
                        Отправить
                    </button>

                </Link>
            </div>
        </div>
    )
}
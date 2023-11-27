'use client'

import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import {AiOutlineArrowRight} from "react-icons/ai";
import {FiLoader} from "react-icons/fi";
import SpecialMenuItem from "@/components/SpecialMenuItem";
import {SelectedMenu} from "@/components/FlightForm";
import {v4 as uuidv4} from "uuid";

interface SpecialMenuProps {
  selectedMenus: SelectedMenu[]
  availableMenus: {name: string, value: string}[]
  handleAddSelectedMenus: (id?: string, value?: string, amount?: number) => any
  isLoading: boolean
  setIsFormPageChanged: (state: boolean) => void
}

const SpecialMenu = (
  {
    selectedMenus,
    availableMenus,
    handleAddSelectedMenus,
    isLoading,
    setIsFormPageChanged
  }: SpecialMenuProps) => {

  return (
    <div className='w-[90%] flex flex-col gap-y-3 items-center'>
      <button
        onClick={() => setIsFormPageChanged(false)}
        className="flex text-white items-center gap-x-2 group mb-3 self-start
        text-lg text-sky-600 rounded-lg font-semibold"
        type='button'
        disabled={isLoading}
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className='flex flex-col gap-y-3'>
        {selectedMenus.map(menu => {
          return (
            <SpecialMenuItem
              key={menu.id}
              id={menu.id}
              availableMenus={availableMenus}
              handleAddSelectedMenus={handleAddSelectedMenus}
            />
          )
        })}
      </div>

      <button
        onClick={() => handleAddSelectedMenus()}
        className="group p-3 w-auto text-sm bg-sky-200 text-lg text-sky-600 rounded-lg font-semibold"
        type='button'
      >
        Добавить новое специальное меню
      </button>

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
    </div>
  )
}

export default SpecialMenu
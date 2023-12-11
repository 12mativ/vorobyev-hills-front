import React from "react";
import {Menu} from "@/app/menu/page";

interface MenuItemProps {
  menuItem: Menu
}

function covertDescriptionField(field: string) {
  switch (field) {
    case 'economy':
      return 'Эконом'
    case 'business':
      return 'Бизнес'
    case 'hot':
      return 'Горячее'
    case 'cold':
      return 'Холодное'
    case 'breakfast':
      return 'Завтрак'
    case 'lunch':
      return 'Обед'
    case 'dinner':
      return 'Ужин'
  }
}

export default function MenuItemDescription({menuItem}: MenuItemProps) {
  return (
    <div className='flex md:flex-row md:gap-x-3 gap-y-4 flex-col justify-between bg-sky-600 p-3 rounded-lg'>

      <div className='flex flex-col w-full md:w-[70%]'>
        <p className='text-xl text-slate-300'>Блюда</p>
        {menuItem.dishes.map((dishItem, index) => {
          return <li key={index}>{dishItem}</li>
        })}
      </div>

      <div className='w-fit'>
        <p className='text-slate-300'>
          Тип меню:
        </p>
        <p className='pl-2'>
          {covertDescriptionField(menuItem.quality_type)}
        </p>
        <p className='pl-2'>
          {covertDescriptionField(menuItem.temperature_type)}
        </p>
        <p className='text-slate-300'>
          Выдавать на:
        </p>
        <p className='pl-2'>
          {covertDescriptionField(menuItem.time_type)}
        </p>
        <p className='text-slate-300'>
          Количество порций:
        </p>
        <p className='pl-2'>
          {menuItem.amount}
        </p>
      </div>
    </div>
  )
}
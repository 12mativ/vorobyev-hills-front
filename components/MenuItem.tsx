import React from "react";
import {Menu} from "@/app/menu/page";

export default function MenuItem({menuItem}: MenuItemProps) {
  return (
    <div className='flex flex-row justify-between bg-sky-600 p-3 rounded-lg'>

      <div className='flex flex-col w-[70%]'>
        <p className='text-xl text-slate-300'>Блюда</p>
        {menuItem.dishes.map((dishItem, index) => {
          return <li key={index}>{dishItem}</li>
        })}
      </div>

      <div className='w-fit'>
        <p className='text-slate-300'>
          Тип меню:
        </p>
        <p>
          {menuItem.quality_type}
        </p>
        <p>
          {menuItem.temperature_type}
        </p>
        <p className='text-slate-300'>
          Выдавать на:
        </p>
        <p>{menuItem.time_type}</p>
        <p className='text-slate-300'>
          Количество порций:
        </p>
        <p>{menuItem.amount}</p>
      </div>
    </div>
  )
}

interface MenuItemProps {
  menuItem: Menu
}
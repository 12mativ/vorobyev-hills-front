import React from "react";
import {Menu, SpecialMenu} from "@/app/menu/page";
import SpecialMenuItem from "@/components/SpecialMenuItem";

export default function SpecialMenuItemDescription({menuItem}: MenuItemProps) {
  return (
    <div className='flex md:flex-row md:gap-x-3 gap-y-4 flex-col justify-between bg-sky-600 p-3 rounded-lg'>

      <div className='flex flex-col w-full md:w-[70%]'>
        <p className='text-xl text-slate-300'>Специальные Блюда</p>
        {menuItem.dishes.map((dishItem, index) => {
          return <li key={index}>{dishItem}</li>
        })}
      </div>

      <div className='w-fit'>
        <p className='text-slate-300'>
          Код меню:
        </p>
        <p className='pl-2'>
          {menuItem.code}
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

interface MenuItemProps {
  menuItem: SpecialMenu
}
import React from "react";
import MenuItem from "@/components/MenuItem";
import {MenuData} from "@/app/menu/page";

export default function MenuDescription({menuData}: MenuDescriptionProps) {
  return (
    <div className='form flex flex-col gap-y-3 text-white'>
      {menuData.menu.map((menuItem, index) => {
        return <MenuItem menuItem={menuItem} key={index} />
      })}
    </div>
  )
}

interface MenuDescriptionProps {
  menuData: MenuData
}
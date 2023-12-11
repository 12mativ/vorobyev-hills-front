import React from "react";
import MenuItemDescription from "@/components/MenuItemDescription";
import {MenuData} from "@/app/menu/page";
import {IoIosArrowBack} from "react-icons/io";
import SpecialMenuItemDescription from "@/components/SpecialMenuItemDescription";

interface MenuDescriptionProps {
  menuData: MenuData
  isLoading: boolean
  setIsSubmitted: (state: boolean) => void
  isMenuDesc?: boolean
}

export default function MenuDescription({menuData, isLoading, setIsSubmitted, isMenuDesc}: MenuDescriptionProps) {
  return (
    <div>
      {
        isMenuDesc && (
          <button
            onClick={() => setIsSubmitted(false)}
            className="flex text-white items-center gap-x-2 group mb-3 self-start
              text-lg text-zinc-500/50 rounded-lg font-semibold"
            type='button'
            disabled={isLoading}
          >
            <IoIosArrowBack size={30} />
          </button>
        )
      }
      <div className='form flex flex-col gap-y-3 text-white'>
        {menuData.menu.map((menuItem, index) => {
          return <MenuItemDescription menuItem={menuItem} key={index} />
        })}

        {menuData.special_menu.map((menuItem, index) => {
          return <SpecialMenuItemDescription menuItem={menuItem} key={index} />
        })}
      </div>
    </div>

  )
}

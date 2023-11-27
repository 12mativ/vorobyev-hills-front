'use client'

import FlightForm from "@/components/FlightForm";
import {useState} from "react";
import MenuDescription from "@/components/MenuDescription";

export default function Menu() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [menuData, setMenuData] = useState<null | MenuData>(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        p-3
        m-0
        mt-auto
        overflow-y-auto
        bg-repeat
      "
    >
      {isSubmitted && menuData && !isLoading
        ? <MenuDescription menuData={menuData} isLoading={isLoading} setIsSubmitted={setIsSubmitted}/>
        : <FlightForm
            setIsSubmitted={setIsSubmitted}
            setMenuData={setMenuData}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
      }
    </div>
  )
}

export interface FlightFormProps {
  setIsSubmitted: (state: boolean) => void
  setMenuData: (menuData: MenuData) => void
  setIsLoading: (state: boolean) => void
  isLoading: boolean
}

export interface MenuData {
  menu: Menu[]
  special_menu: SpecialMenu[]
}

export interface Menu {
  quality_type: string
  amount: number
  time_type: string
  temperature_type: string
  dishes: string[]
}

export interface SpecialMenu {
  code: string
  amount: number
  dishes: string[]
}

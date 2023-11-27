'use client'

import React, {useEffect, useState} from "react";

const SpecialMenuItem = ({id, availableMenus, handleAddSelectedMenus}) => {
  const [menuCode, setMenuCode] = useState('')
  const [amount, setAmount] = useState(0)
  console.log('menus', availableMenus)

  useEffect(() => {
    handleAddSelectedMenus(id, menuCode, amount)
  }, [menuCode, amount])

  return (
    <div className='bg-blue-300 flex flex-col gap-y-3 p-2 rounded-lg'>
      <div className='flex flex-col gap-y-2'>
        <label>
          Специальное меню:
        </label>
        <select
          onChange={(event) => setMenuCode(event.target.value)}
          className="p-1 bg-sky-200 text-sky-600 rounded-lg font-semibold"
        >
          {availableMenus.map((availableMenu, index) => {
            return (
              <option
                key={`${index}-${availableMenu.value}`}
                value={availableMenu.value}
              >
                {availableMenu.name}
              </option>
            )
          })}
        </select>
      </div>

      <div className='flex flex-col gap-y-2'>
        <p>
          Количество:
        </p>
        <input
          onChange={(event) => setAmount(Number(event.target.value))}
          type="number"
          min={0}
          max={350}
          className=" bg-sky-200 rounded-lg  text-sky-600 p-1"
        />
      </div>
    </div>
  )
}

export default SpecialMenuItem
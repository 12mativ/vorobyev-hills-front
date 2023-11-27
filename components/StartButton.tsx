'use client'

import Link from "next/link"

export default function StartButton(){
    return(
        <>
            <Link href ={'/menu'}>
                <button className="p-3 bg-sky-200 transition rounded-3xl hover:bg-sky-300 w-[200px] h-[50px] text-sky-600 font font-medium">
                    Начать
                </button>
            </Link>
        </>
    )
}
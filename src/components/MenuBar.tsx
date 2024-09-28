import React from 'react'
import { HomeIcon, UserRound, Users } from 'lucide-react'

const menuItems = [
    {path: "/dashboard", label:"Dashboard", icon: HomeIcon},
    {path: "/members", label:"Members", icon: UserRound},
    {path: "/teams", label:"Teams", icon: Users},
]

const MenuBar = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center rounded-full bg-gray-200/50 w-12 h-auto p-1 gap-2">

                {menuItems.map((itm, idx) => {    
                    const IconComponent = itm.icon
                    return (
                        <IconComponent key={idx} className="w-10 h-10 rounded-full bg-gray-500 p-1 text-white"></IconComponent>
                    )
                    }
                )}
                </div>
            </div>
        </>
    )
}

export default MenuBar
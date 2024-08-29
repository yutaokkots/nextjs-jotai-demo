"use client";
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React, { useState } from 'react'
import { UserRound } from 'lucide-react'

const Page:React.FC = () => {
    const [ date, setDate ] = useState<Date | undefined>(new Date())
    return (
        <>
            <header>
                <nav className="flex justify-around font-bold">
                    <div>logo</div>
                    <div className="flex flex-row justify-around gap-5">
                        <div>Dashboard</div>
                        <div>Members</div>
                        <div>Teams</div>
                    </div>
                    <div>
                        <DropdownMenu>
                        <DropdownMenuTrigger> 
                            <div className="flex flex-row gap-2"> Profile <UserRound/></div> 
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Teams</DropdownMenuItem>
                            <DropdownMenuItem>Subscriptions</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </nav>
            </header>
            <main className="flex min-h-screen flex-col items-center p-24 bg-white">
                <div className="text-black text-6xl font-bold ">Component demos</div>
                <div className="flex flex-row">

                    <div className="flex flex-col gap-2">
                        <Button 
                            variant="default"
                            className="">Primary button</Button>
                        <Button 
                            variant="secondary"
                            className="">Secondary button</Button>
                        <Button 
                            variant="destructive"
                            className="">Destructive</Button>    
                    </div>
                    <div className="flex flex-col gap-2">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            />
                        <div>
                            <p>Selected Date: {date && date.toLocaleDateString()}</p>
                            <p>Selected Time: {date && date.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </main>
        </>
    )
}

export default Page
"use client";
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React, { useState } from 'react'
import { UserRound } from 'lucide-react'
import { 
    Avatar,
    AvatarFallback,
    AvatarImage
 } from '@/components/ui/avatar';
import Link from 'next/link';
import MenuBar from '@/components/MenuBar';

// sheet
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import CustomToggleGroup from "@/components/CustomToggleGroup"
import { NavigationMenuDemo } from '@/components/NavigationMenu';
import PopoverComp from '@/components/PopoverComp';
import ScrollableData from '@/components/Scrollable';
import LoadData from '@/components/LoadData';
import TabComp from '@/components/TabComp';

const Page:React.FC = () => {
    const [ date, setDate ] = useState<Date | undefined>(new Date())
    return (
        <>
            <header>
                <nav className="flex justify-around font-bold">
                    <div>logo</div>
                    <div className="flex flex-row justify-around gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger> 
                                <div className="flex flex-row gap-2"> Dashboard </div> 
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>My Teams</DropdownMenuItem>
                                <DropdownMenuItem>My Members</DropdownMenuItem>
                                <DropdownMenuItem>BMI Calculator</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </nav>
            </header>
            <main className="flex min-h-screen flex-col items-center p-24 bg-white">
            
            <NavigationMenuDemo />

            <PopoverComp>
                <ScrollableData>
                    <LoadData />
                </ScrollableData>
            </PopoverComp>

            <TabComp />

                <div className="text-black text-6xl font-bold ">Component demos (Shadcn) </div>
                
                    <div className="grid grid-flow-col border-2 rounded-xl p-5 mt-10">
        <div className="relative">


            <Sheet >
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when youre done.
                </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                    Name
                    </Label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                    Username
                    </Label>
                </div>
                </div>
                <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
            </Sheet>
            </div>

                        <MenuBar />
                        <div className="flex flex-row">
                            <CustomToggleGroup />
                            

                            <div className="w-44 flex flex-col items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>Username Here</div>
                                <div>Weather Info here</div>

                            </div>
                            <div className="flex flex-col gap-2">
                                <Button 
                                    variant="default"
                                    className="">Primary button</Button>
                                <Button 
                                    variant="secondary"
                                    className="">Secondary button</Button>
                                <Button 
                                    variant="destructive"
                                    size="sm"
                                    className="">Destructive</Button>    
                                <Button 
                                    variant="default"
                                    size="lg"
                                    className="">HELLO WORLD</Button>    
                                <Button 
                                    
                                    variant="link"
                                    size="lg"
                                    className="">
                                        MUI Component page
                                </Button>    
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
                    </div>
                <div></div>
            </main>
        </>
    )
}

export default Page
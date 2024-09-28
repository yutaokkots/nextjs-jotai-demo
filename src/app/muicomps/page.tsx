import React from 'react'
import Button from '@mui/material/Button';
import ToggleButtonMultiple from '@/components/muicomponents/ToggleButtonMultiple';
import { UserRound } from 'lucide-react'

const Page = () => {
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
                    <div className="flex flex-row gap-2">Profile<UserRound/> </div>
                </nav>
            </header>
            <main className="flex min-h-screen flex-col items-center p-24 bg-white">
                <div className="text-black text-6xl font-bold ">Component demos (MUI) </div>
                <div className="flex flex-row">

                    <ToggleButtonMultiple />
                    <div>
                        <Button variant="outlined">Primary Button</Button>
                    </div>
                </div>
            </main>
        <Button variant="contained">Hello world</Button>
        </>
    )
}

export default Page
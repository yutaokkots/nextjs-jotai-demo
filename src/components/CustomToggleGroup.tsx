import React from 'react'
import {
    ToggleGroup, 
    ToggleGroupItem
} from "@/components/ui/toggle-group"

import { HomeIcon, UserRound, Users } from 'lucide-react'

const CustomToggleGroup:React.FC = () => {
    return (
        <>
            <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <HomeIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <UserRound />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                    <Users />
                </ToggleGroupItem>
            </ToggleGroup>
        </>
    )
}

export default CustomToggleGroup
import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

const PopoverComp= ({ children }: { children: ReactNode}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Load File</Button>
            </PopoverTrigger>
            <PopoverContent className="w-100">
                <div className="h-auto">
                    {children}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default PopoverComp
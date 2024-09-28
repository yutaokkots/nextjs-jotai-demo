import React, { ReactNode } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"


const ScrollableData = ({ children} :{ children:ReactNode }) => {
    return (
        <ScrollArea className="rounded-md border">
            {children}
        </ScrollArea>
    )
}

export default ScrollableData
import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import ScrollableData from './Scrollable'

import LineupTable from './LineupTable'

const currentLineupSelected = [
    {
        firstName: "Lisandro",
        lastName: "Martínez",
        weight: 160,
        goalkeeper: false,
        defense: true,
        midfield: false,
        forward: false,
        position: "left",
        id: 23
    },
    {
        firstName: "Rasmus",
        lastName: "Højlund",
        weight: 170,
        goalkeeper: false,
        defense: false,
        midfield: false,
        forward: true,
        position: "right",
        id: 20
    },
    {
        firstName: "Christian",
        lastName: "Eriksen",
        weight: 165,
        goalkeeper: false,
        defense: false,
        midfield: true,
        forward: false,
        position: "center",
        id: 3
    }
]

const currentLineup = [
    {
        firstName: "Altay",
        lastName: "Bayındır",
        weight: 160,
        goalkeeper: true,
        defense: false,
        midfield: false,
        forward: false,
        position: "",
        id: 500
    },
    {
        firstName: "Victor",
        lastName: "Lindelöf",
        weight: 180,
        goalkeeper: false,
        defense: true,
        midfield: false,
        forward: false,
        position: "right",
        id: 242
    },
    {
        firstName: "Noussair",
        lastName: "Mazraoui",
        weight: 180,
        goalkeeper: false,
        defense: true,
        midfield: false,
        forward: false,
        position: "center",
        id: 123
    },
    {
        firstName: "Mason",
        lastName: "Mount",
        weight: 160,
        goalkeeper: false,
        defense: true,
        midfield: true,
        forward: false,
        position: "center",
        id: 90
    },
    {
        firstName: "Antony",
        lastName: "",
        weight: 180,
        goalkeeper: false,
        defense: false,
        midfield: false,
        forward: true,
        position: "right",
        id: 798
    },
    {
        firstName: "Antony",
        lastName: "",
        weight: 180,
        goalkeeper: false,
        defense: false,
        midfield: false,
        forward: true,
        position: "right",
        id: 798
    },
    {
        firstName: "Antony",
        lastName: "",
        weight: 180,
        goalkeeper: false,
        defense: false,
        midfield: false,
        forward: true,
        position: "right",
        id: 798
    }
]

const PlayerDisplayArea = () => {
    return (
            <Card className="h-[500px]">
                <CardHeader>
                    <CardTitle>Lineup</CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LineupTable lineup={currentLineupSelected}/>
                    <LineupTable lineup={currentLineup}/>
                    
                    <ResizablePanelGroup
                        direction="vertical"
                        className="max-w-md rounded-lg border ">
                        <ResizablePanel defaultSize={40} >
                            <div className="flex h-full items-center justify-center p-6">
                                <span>One</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle/>
                        <ResizablePanel defaultSize={60}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span>Two</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </CardContent>
            </Card>

    )
}

export default PlayerDisplayArea
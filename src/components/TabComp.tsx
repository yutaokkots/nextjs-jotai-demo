import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import PlayerDisplayArea from './PlayerDisplayArea'



const TabComp = () => {
    return (
        <Tabs defaultValue="lineup" className="w-auto ">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="lineup">Lineup</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            <TabsContent value="lineup">
                <PlayerDisplayArea />
            </TabsContent>
            <TabsContent value="saved">
                <PlayerDisplayArea />
            </TabsContent>
        </Tabs>
    )
}

export default TabComp
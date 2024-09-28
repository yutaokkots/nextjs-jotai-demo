import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { ScrollArea } from './ui/scroll-area'

interface LineupTableProps {
    lineup: Lineup[]
}

type Lineup = {
    firstName: string,
    lastName: string,
    weight: number,
    goalkeeper: boolean,
    defense: boolean
    midfield: boolean,
    forward: boolean,
    position: string,
    id: number
}


const LineupTable = ({lineup}: LineupTableProps)=> {

    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>GL</TableHead>
                    <TableHead>DF</TableHead>
                    <TableHead>MF</TableHead>
                    <TableHead>FW</TableHead>
                    <TableHead>Position</TableHead>
                </TableRow>
            </TableHeader>
            </Table>
            <ScrollArea className="h-auto">
                <Table>
                 
                <TableBody>
                    {lineup.map((player) => (
                        <TableRow key={player.id}>
                            <TableCell>{player.firstName} {player.lastName}</TableCell>
                            <TableCell>{player.weight}</TableCell>
                            <TableCell>{player.goalkeeper ? <div className="bg-red-300 rounded-full w-2 h-2"></div> : <></>}</TableCell>
                            <TableCell>{player.defense  ? <div className="bg-red-300 rounded-full w-2 h-2"></div> : <></>}</TableCell>
                            <TableCell>{player.midfield  ? <div className="bg-red-300 rounded-full w-2 h-2"></div> : <></>}</TableCell>
                            <TableCell>{player.forward  ? <div className="bg-red-300 rounded-full w-2 h-2"></div> : <></>}</TableCell>
                            <TableCell>{player.position}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </ScrollArea>
            </>
    )
}

export default LineupTable
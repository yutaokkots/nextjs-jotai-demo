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
import { Button } from './ui/button'


const mockFiles = [
    {
        event: "Soccer tournament 2024",
        date: "2024-09-28",
        name: "match 1",
        id: 5
    },
    {
        event: "Soccer tournament 2024", 
        date: "2024-09-29",
        name: "match 2",
        id: 15
    },
    {
        event: "Soccer tournament 2024",
        date: "2024-09-29",
        name: "match 3",
        id: 24
    },
    {
        event: "Soccer practice 10/1", 
        date: "2024-10-01",
        name: "practice",
        id: 53
    }
]

const LoadData:React.FC = () => {
    return (
        <Table>
            <TableCaption>Load the following data</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockFiles.map((fileName) => (
                    <TableRow key={fileName.id}>
                        <TableCell>{fileName.event}</TableCell>
                        <TableCell>{fileName.date}</TableCell>
                        <TableCell>{fileName.name}</TableCell>
                        <TableCell><Button>Load</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}

export default LoadData
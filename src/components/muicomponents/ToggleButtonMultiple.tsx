"use client"
import React, { useState } from 'react'
import { EyeIcon, EyeOff, Scale, Atom } from 'lucide-react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ToggleButtonMultiple = () => {
    const [formats, setFormats] = useState(() => ['eye', 'scale', 'atom'])
    
    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[]
    ) => {
        if (newFormats.length) {
            setFormats(newFormats)
        }
    }
    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting">

            <ToggleButton value="eye" aria-label="eye">
                <EyeIcon/>
            </ToggleButton>

            <ToggleButton value="scale" aria-label="scale">
                <Scale/>
            </ToggleButton>

            <ToggleButton value="atom" aria-label="atom">
                <Atom/>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ToggleButtonMultiple
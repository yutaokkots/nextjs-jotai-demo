'use client' // client-side rendering to correctly use useAtom()
import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { animeAtom } from '@/atoms/animeAtom'

const AnimeApp:React.FC = () => {
    // jotai state and setter are destructured through useAtom.
    const [anime, setAnime] = useAtom(animeAtom)

    // Form states 
    const [ title, setTitle ] = useState<string>("");
    const [ year, setYear ] = useState<string>("");
    const [ watched, setWatched ] = useState<boolean>(false);

    const handleSubmit = (evt:React.FormEvent) => {
        evt.preventDefault()
        setAnime((anime) => [
            ...anime,
            {
                title: title,
                year: parseInt(year),
                watched: watched
            }
        ])
        setTitle("")
        setYear("")
        setWatched(false)
    }
    
    return (
        <>
            <ul>
                {anime.map((item, idx) => 
                    <li key={idx}>
                        {item.title}
                    </li>
                )}
            </ul>
            <form
                className="flex flex-col border-2 border-white w-60 p-2 rounded-xl "
                onSubmit={handleSubmit}>
                <label htmlFor="title">Anime Title</label>
                <input 
                    className="text-black"
                    name="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                <label htmlFor="year">Anime Year</label>
                <input 
                    className="text-black"
                    name="year" 
                    value={year} 
                    type="number"
                    onChange={(e) => setYear(e.target.value)}></input>
                <label htmlFor="watched">Anime watched</label>
                <input 
                    className="text-black"
                    name="watched" 
                    type="checkbox"
                    checked={watched}
                    onChange={(e) => setWatched(e.target.checked)}></input>
                <button
                    className="rounded-md border-2 m-2" 
                    type="submit">Submit</button>
            </form>
        </>
    )
}

export default AnimeApp
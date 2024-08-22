
import { atom } from 'jotai';

export const animeAtom = atom([
    {
        title: 'Ghost in the Shell',
        year: 1995,
        watched: true
    },
    {
        title: 'Serial Experiments Lain',
        year: 1998,
        watched: false
    },
    {
        title: 'Jujutsu Kaisen',
        year: 2020,
        watched: false
    },
    {
        title: 'Ranma 1/2',
        year: 1989,
        watched: false
    }
])

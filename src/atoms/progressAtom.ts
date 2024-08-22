import { atom } from 'jotai';
import { animeAtom } from './animeAtom';

const progressAtom = atom((get) => {
        const anime = get(animeAtom)
        return anime.filter((item) => item.watched).length / anime.length
    })

export default progressAtom;
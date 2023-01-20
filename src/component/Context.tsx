
import { createContext, useContext, } from 'react';
import { MyContext } from './Type';


export const MovieContext = createContext<MyContext>({
    state: [{ Movie_Name: 'f', Movie_Rating: 0, Movie_Duration: 'f' }],
    setstate: () => { }
})

export const useMovieContext = () => useContext(MovieContext)
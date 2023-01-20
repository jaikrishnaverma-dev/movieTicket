import React, { useState } from 'react';
import './App.css';
import { MovieContext } from './component/Context';
import Main from './component/Main';
import { movieObj, MyStateObj } from './component/Type';

const inititalState:MyStateObj[]= [movieObj]
function App() {
  const [state, setstate] = useState<MyStateObj[]>(inititalState)
  console.log('state',state)
  return (
    <MovieContext.Provider value={{state,setstate}}>
   <Main/>
   </MovieContext.Provider>
  );
}

export default App;

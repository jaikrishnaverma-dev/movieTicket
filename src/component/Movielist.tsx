import React, { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useMovieContext } from './Context'
import Fallback from './Fallback'
import { MyStateObj } from './Type'
import UlList from './UlList'

const Movielist = () => {
  const { state } = useMovieContext()
  let [show, setShow] = useState(state)
  const search = useRef<HTMLInputElement>(null)


  useEffect(() => {
    filterHandler()
  }, [state])

  // form handler
  const filterHandler = () => {
    let value: string | undefined = search.current?.value
    if (value && value.length < 2)
      return 0
    else if (value === '')
      setShow([...state])
    else if (value !== undefined) {
      show = state.filter(x => {
        return x.Movie_Name.substring(0, value?.length).toLocaleLowerCase() === value?.toLocaleLowerCase()
      })
      setShow([...show])
    }
  }

  const descendingView: MyStateObj[] = show.sort((a, b) => parseFloat(b.Movie_Duration.substring(0, b.Movie_Duration.length - 1)) - parseFloat(a.Movie_Duration.substring(0, a.Movie_Duration.length - 1)))


  return (
    <>
      <form className="input-group mb-3">
        <input ref={search} onChange={filterHandler} type="text" className="form-control" placeholder="Search Movies.." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span className="input-group-text bg-white" id="basic-addon2"><i className="bi bi-search"></i></span>
      </form>
      <ErrorBoundary FallbackComponent={Fallback} onReset={() => { setShow([...state]) }} >
        <UlList table={descendingView} />
      </ErrorBoundary>
    </>
  )
}

export default Movielist
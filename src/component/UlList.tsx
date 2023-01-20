import React from 'react'
import { MyStateObj } from './Type'

const UlList = ({ table }: { table: MyStateObj[] }) => {
    if (table.length === 0) {
        throw new Error("No Result Found")
    }
    return (
        <ul className="list-group list-group-numbered ulist">
            {
                table.map((movie: MyStateObj, index: number) => <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{movie.Movie_Name}</div>
                        Rating: {movie.Movie_Rating}/100
                    </div>
                    <span className="badge bg-primary rounded-pill">{movie.Movie_Duration}</span>
                </li>)
            }
        </ul>
    )
}

export default UlList
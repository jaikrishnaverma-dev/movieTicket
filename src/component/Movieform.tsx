import React, { useState } from 'react'
import { useMovieContext } from './Context';
import { MyStateObj } from './Type';

const Movieform = () => {
    const { state, setstate } = useMovieContext()
    const [data, setData] = useState<MyStateObj>({ Movie_Name: '', Movie_Rating: 0, Movie_Duration: '' })
    const [msg, setMsg] = useState<string[]>(['', '', ''])

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e) => {
        let target = e.currentTarget
        let str: boolean | string | number = false
        // 1 check rating
        if (target.name === 'Movie_Rating') {
            if (parseInt(target.value) < 101 && parseInt(target.value) > -1) {
                msg[1] = ''
                str = parseInt(target.value)
                target.style.borderColor = 'grey'
            } else {
                msg[1] = 'rating should be between 0 to 100'
                target.style.borderColor = 'red'
            }
        }
        // 2 check duration
        if (target.name === 'Movie_Duration') {
            let prefix = target.value.substring(target.value.length - 1);
            if (prefix === 'm') {
                target.style.borderColor = 'grey'
                let totalMin: number = parseInt(target.value.substring(0, target.value.length - 1));
                let hour: number = parseInt((totalMin / 60).toString())
                let minutes = (totalMin * 10) / 60
                str = hour + '.' + minutes.toString().substring(0, 1) + 'Hrs '
                console.log(str)
                msg[2] = ''
            }
            else if (prefix === 'h') {
                target.style.borderColor = 'grey'
                str = target.value.substring(0, target.value.length - 1) + 'Hrs'
                msg[2] = ''
            } else { target.style.borderColor = 'red'; msg[2] = 'e.g., in this format 132m or 2.5h' }
        }
        setData({ ...data, [e.currentTarget.name]: (str) ? str : target.value });
        setMsg([...msg])
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let flg = true
        msg.forEach((x: string) => { if (x !== '') { flg = false } })
        if (flg) {
            state.push(data)
            setstate([...state])
            e.currentTarget.reset()
        }
    }

    return (
        <form style={{ width: '100%' }} onSubmit={handleSubmit} className='d-flex flex-wrap justify-content-center  p-4 '>
            <div className='d-flex flex-wrap justify-content-between' style={{ maxWidth: '700px' }}>
                <div className="m-1 col-5" style={{ minWidth: '290px' }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Movie Name</label>
                    <input required name='Movie_Name' onChange={handleChange} type='text' className="form-control" aria-describedby='about name' placeholder='Enter Name' />
                    <small id="emailHelp text-danger" className="form-text">{msg[0]}</small>
                </div>

                <div className="m-1 col-5" style={{ minWidth: '290px' }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Movie Rating</label>
                    <input required name='Movie_Rating' onChange={handleChange} type='number' className="form-control" aria-describedby='about name' placeholder='Enter Name' />
                    <small id="emailHelp text-danger" className="form-text">{msg[1]}</small>
                </div>
                <div className="m-1 col-5" style={{ minWidth: '290px' }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">Movie Duration</label>
                    <input required name='Movie_Duration' onChange={handleChange} type='text' className="form-control" aria-describedby='about name' placeholder='Enter Name' />
                    <small id="emailHelp text-danger" className="form-text">{msg[2]}</small>
                </div>

            </div>
            <div className="col-12" style={{ maxWidth: '700px' }}>
                <button type="submit" className="btn btn-primary my-3  ">Submit</button>
            </div>
        </form>
    )
}

export default Movieform
export type MyStateObj={
    Movie_Name:string
    Movie_Rating:number
    Movie_Duration:string
  }

export  type MyContext = {
    state: MyStateObj[]
    setstate:(c:MyStateObj[]) => void
  }

 export const inititalState:MyStateObj[]= [{ Movie_Name: 'f', Movie_Rating: 10, Movie_Duration: 'f' }]
 
 export const movieObj={ Movie_Name: 'AVATAR', Movie_Rating: 90, Movie_Duration: '3.2Hrs' }
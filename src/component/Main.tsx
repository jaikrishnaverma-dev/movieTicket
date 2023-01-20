
import Movieform from './Movieform'
import Movielist from './Movielist'
const Main = () => {
    return (
        <>
          
                <div className="container d-flex p-5" >
                    <div className="col-6"><Movieform /></div>
                    <div className="col-6"><Movielist /></div>
                </div>
        

        </>

    )
}

export default Main
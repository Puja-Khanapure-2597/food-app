import { useRouteError } from "react-router-dom"
const Errorpage =()=>{
    const err= useRouteError();
    console.log('err',err)
    return(
        <div>
        <h1>OOPS!!!!!</h1>
        <h2>Somthing Went Wrong</h2>
        <h4>{err.status}</h4>
        <h4>{err?.error?.message}</h4>
    </div>
    )
}
export default Errorpage
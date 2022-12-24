import { useNavigate } from "react-router-dom";

const PageTwo  = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <h1>User Details</h1>
        <button onClick={()=>navigate(-1)}>BACK</button>
        </>
    )
}

export default PageTwo;
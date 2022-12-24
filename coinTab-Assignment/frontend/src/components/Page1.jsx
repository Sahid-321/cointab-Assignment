import { useNavigate } from "react-router-dom"

const PageOne = ()=>{
    const navigate = useNavigate();
const handleFetch = ()=>{
    fetch()

}

const handleDelete =()=>{
    alert("Deleted")
}

const handkeDetails = ()=>{
    navigate('/page2')
}
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={handleFetch}>Fetch User</button>
        <button onClick={handleDelete}>Delete User</button>
        <button onClick={handkeDetails}>User Details</button>
        </>
    )
}

export default PageOne;
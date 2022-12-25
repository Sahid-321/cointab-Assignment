import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const PageOne = () => {
    const navigate = useNavigate();
    const [storeUser, setStoreUser] = useState([])
    const [userValue, setUserValue] = useState([])
  
    const handleFetch = () => {
alert("User Data Fetched and Added in your MongoDB")
   axios.post('http://localhost:8080/post')
            .then((res)=> console.log('User Data Fetched and Added in your MongoDB', res))
            .catch((err)=> console.log('Something went wrong', err))
            
       
    
// console.log(userValue);
    }

    const handleDelete = () => {
        alert("User data deleted from MongoDB");
        axios.delete('http://localhost:8080/delete')
        .then((res)=> console.log('User Data delete in your MongoDB', res))
        .catch((err)=> console.log('Something went wrong', err))
        
    }

    const handkeDetails = () => {
        navigate('/page2')
    }
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleFetch}>Fetch User</button>
            <button onClick={handleDelete}>Delete User</button>
            <button onClick={handkeDetails}>User Details</button>
        </>
    )
}

export default PageOne;
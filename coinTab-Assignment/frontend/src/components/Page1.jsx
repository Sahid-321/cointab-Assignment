import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Button } from "react-bootstrap";
const PageOne = () => {
    const navigate = useNavigate();
   const [count, setCount] = useState(0)
  
    const handleFetch = () => {
setCount(count+1);
if(count ==1){
alert("User Data Fetched and Added in your MongoDB")
   axios.post('http://localhost:8080/post')
            .then((res)=> console.log('User Data Fetched and Added in your MongoDB', res))
            .catch((err)=> console.log('Something went wrong', err))
            
       
}else{
    alert("Data alredy added")
}
// console.log(userValue);
    }

    const handleDelete = () => {
        setCount(1);
        alert("User data deleted from MongoDB");
        axios.delete('http://localhost:8080/delete')
        .then((res)=> console.log('User Data delete in your MongoDB', res))
        .catch((err)=> console.log('Something went wrong', err))
        
    }

    const handleDetails = () => {
        navigate('/page2')
    }
    return (
        <>
            <h1>Home Page</h1>
            <Button onClick={handleFetch}>Fetch User</Button>
            <Button onClick={handleDelete}>Delete User</Button>
            <Button onClick={handleDetails}>User Details</Button>
        </>
    )
}

export default PageOne;
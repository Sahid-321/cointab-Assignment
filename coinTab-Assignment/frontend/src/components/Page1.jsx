import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const PageOne = () => {
    const navigate = useNavigate();
    const [storeUser, setStoreUser] = useState([])
    const [userValue, setUserValue] = useState({
        title: "",
        first: "",
        last:"",
        gender:"",
        email:"",
        country:"",
        img:"",
        age:""
    })

    //fetch data
    function getUsers() {
        fetch("https://randomuser.me/api/?results=50")
            .then((results) => {
                return results.json();
            })
          
            .then((data) => {
                
                setStoreUser(data.results);
                // Access your data here
            });
    }

storeUser.map((elem)=>{
   setUserValue({
    title: elem.name.title,
        first: elem.name.first,
        last:elem.name.last,
        gender:elem.gender,
        email:elem.email,
        country:elem.location.country,
        img: elem.picture.large,
        age: elem.dob.age
   })
})
console.log(userValue);
    const handleFetch = () => {
        getUsers()
       
// axios.post('http://localhost:8080/post', storeUser)
// .then((res)=> alert('User Data Fetched and Added in your MongoDB'))
// .catch((err)=> alert('Something went wrong', err))

    }

    const handleDelete = () => {
        alert("Deleted")
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
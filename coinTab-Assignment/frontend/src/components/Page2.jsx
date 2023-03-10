import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const PageTwo = () => {

    const [value, setValue] = useState([])
    const [count, setCount] = useState(1);
    const [gender, setGender] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/get?page=${count}&gender=${gender}`)
            .then((res) => { setValue(res.data.user) })
            .catch((err) => console.log(err))

    }, [count,gender])
//For increament
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }

        
    }
    //for decrement
    const handleIncrement = () => {
        if (gender == 'male' && count !=5) {
            setCount(count + 1)
         
        }
       
        if(gender == 'female' && count !=6){
          
            setCount(count + 1)
        
        }
     
        
        if(gender == "" && count !=10)

     
        setCount(count + 1)
       
    }

    // for filter
    const handleAll = ()=>{
setGender("")
setCount(1)
    }
    const handleMale = ()=>{
        setGender("male")
        setCount(1)
    }
    const handleFemale = ()=>{
        setGender("female")
        setCount(1)
    }

    return (
        <div >
            <h1>User Details</h1>
            <Button onClick={() => navigate(-1)}>BACK</Button>
            <h3>Filter By Gender</h3>
            <div >
            <Button onClick={handleAll} style={{ margin: "5px", background: "gray", color: "black", borderRadius: "10px" }}>All</Button>

                <Button onClick={handleMale} style={{ margin: "5px", background: "gray", color: "black", borderRadius: "10px" }}>Male</Button>
                <Button onClick={handleFemale} style={{ color: "black", background: "gray", borderRadius: "10px" }}>Female</Button>
           
            </div>
            <div style={{ display: "flex" }}>

                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Picture</th>
                        </tr>
                    </thead>

                    {
                        value.map((elem) => {
                            return (

                                <tbody>
                                    <tr>
                                        <td>{elem.title}</td>
                                        <td>{elem.first}</td>
                                        <td>{elem.last}</td>
                                        <td>{elem.age}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.gender}</td>
                                        <td>{elem.country}</td>
                                        <td><img src={elem.img} /></td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }

                </Table>

            </div>
            <div>
                <Button onClick={handleDecrement}>Prev</Button>
                <Button onClick={handleIncrement}>Next</Button>
            </div>


        </div>
    )
}

export default PageTwo;
import { useNavigate } from "react-router-dom"

const PageOne = ()=>{

    
    //fetch data
    function getUsers() {
        fetch("https://randomuser.me/api/?results=50")
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            console.log(data.results);
            // Access your data here
          });
      }
      
  


    const navigate = useNavigate();
const handleFetch = ()=>{
    getUsers()
 

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
import React,{useEffect,useState} from 'react'
import "./App.css";

let object
const  App = ()=> {
  const [users,setUsers] =  useState([])
  const getApi = async()=>{
    const respose = await fetch('https://reqres.in/api/users?page=2');
    object =(await respose.json());
    console.log(object);
    setUsers(object["data"]);
    console.log("hello Neeraj welcome");
  }
useEffect( ()=>{
  getApi();
},[])
  return (
    <>
         <div className="row">
            {
          users.map((curElem) =>{
          const {first_name,last_name,avatar,email} = curElem;
          return(
            <div className = "col-lg-3 col-md-4 col-sm-12">
            <div className="card mt-3 cards1">
                     <img src={avatar} alt="neeraj img" className = "rounded img-responsive card-img-top" width="250" height="150"/>
                           <div className= "card-body"> 
                           <h6 className = "inline">first_name :-</h6>
                           <p className = "inline acard-text"> {first_name}</p>
                           <br></br>
                           <h6 className = "inline">last_name :-</h6>
                           <p className = " inline acard-text"> {last_name}</p>
                           <br/>
                           <h6 className = "inline">Email :-</h6> 
                           <p className = " inline acard-text"> {email}</p> 
                           </div>
                           </div>
                     </div>
                      )
                })  
            }
            </div>
     
                


        </>
    
  )
}

export default App
import React, { Component } from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

  function Loginform (props){

   // const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        mobileNumber:"",
        address:""
      });
    
  

   let handlesubmit= async (event)=>{
        event.preventDefault();
        console.log()
        // setUsername({ ...username, [event.target.name]: event.target.value }
            
            // );
            // console.log("user",username)
            
        try{
       let res = await fetch("http://localhost:5000/",{
            method: "GET",           
            headers: {
                "Content-Type" : "application/json; charset=utf-8"
            }
        })
      
// eslint-disable-next-line
        
let resJson= await res.json();
console.log("response",resJson)
if(res.status === 200){
            alert("user created successfully")
        }
        else{
            alert("some error has occured")
        }
    }
    catch (err) {
        console.log(err);
      }
    }


       return(
        <div>
<form onSubmit={handlesubmit}>
              <div>
              <TextField id="outlined-basic" label="Name" variant="outlined"
              error={userDetails.username === ""}
              helperText={userDetails.username === "" ? "Please enter the username" : " "}
              onChange={(event) => {
                setUserDetails( { 
                  ...userDetails, 
                  username: event.target.value 
                })}
              }
              />
                                 </div>
                                 <div>
                                 <div>
              <TextField id="outlined-basic" label="Password" variant="outlined"
                            error={userDetails.password === ""}
                            helperText={userDetails.password === "" ? "Please enter the password" : " "}               
              onChange={(event) => {
                setUserDetails( { 
                  ...userDetails, 
                  password: event.target.value 
                })}
              }
              />
                                 </div>
                                 <div>
              <TextField id="outlined-basic" label="Mobile Number" variant="outlined" 
                            error={userDetails.mobileNumber === ""}
                            helperText={userDetails.mobileNumber === "" ? "Please enter the mobile number" : " "}              
              onChange={(event) => {
                setUserDetails( { 
                  ...userDetails, 
                  mobileNumber: event.target.value 
                })}
              } />
                                 </div>
                                 <div>
              <TextField id="outlined-basic" label="Address" variant="outlined" 
                            error={userDetails.address === ""}
                            helperText={userDetails.address === "" ? "Please enter the address" : " "}
              
              onChange={(event) => {
                setUserDetails( { 
                  ...userDetails, 
                  address: event.target.value 
                })}
              }
              />
                                 </div>
                                 
               
                <div>

                <Button variant="contained" type="submit">Sign up</Button>
                </div>

              </div>
            </form> 

                    </div>
             
            

       )
    }

 export default Loginform

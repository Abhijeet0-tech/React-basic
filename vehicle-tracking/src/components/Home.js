import React, { Component } from "react";
import { useNavigate } from "react-router-dom"


export function Home(props){

    const navigate = useNavigate();

    const cars = [
        {id: 1, type: 'Four- wheeler', name:'Audi'},
        {id: 2, type: 'two wheeler', name:'Shine'},
        {id: 3, type: 'three wheeler', name:'Auto'}
      ];
  let LocateUser = () =>{
    console.log("hello user")
       navigate("/userdashboard")
  }
  const track= () =>{
    navigate("/googlemap")
  }

    return (
        <div>
            <table>
                <tr>
                   <th>
                      Type
                   </th>
                   
                   <th>
                      Name
                   </th>
                   
                   <th>
                      Locate
                   </th>
                   
                   <th>
                      Track
                   </th>
              </tr>
              <tr>
                 <td>
                    Four-wheeler
                 </td>
                 <td>
                    Audi
                 </td>
                 <td>
                    <button  onClick={LocateUser}>Locate</button>
                 </td>
                 <td>
                    <button onClick={track}>Track</button>
                 </td>
              </tr>

            </table>
        </div>
    )
}


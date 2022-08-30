import React, { Component } from "react";

export class Userdashboard extends Component{
     
    render(){
        return(
        <div>
            <h1>
                welcome user
            </h1>
            <form>
            <div>
        <input type="radio" value="start" name="gender" /> Start
        <input type="radio" value="stop" name="gender" /> Stop
        <input type="radio" value="damage" name="gender" /> Damage
      </div>
            </form>
        </div>)

    }

}
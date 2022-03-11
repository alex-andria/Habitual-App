import React, {useState} from "react";
import UpdateHabitButton from "./UpdateHabitButton";



function HabitSettings({habit}){

    
const [showSettings, setShowSetings]= useState(false)

function handleDeleteButton(){

    fetch(`http://localhost:3000/habits/${habit.id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => console.log(res))

}

function handleShowSettingsButton(){
    setShowSetings(true)
}

function handleExitSettingsButton(){

    setShowSetings(false)
}


if(showSettings===true){
    return(
        <div>
            <button style={{backgroundColor: `${habit.color_code}`}} onClick={handleExitSettingsButton}>Exit Settings</button>
            <br/>
            <br/>
            <button style={{backgroundColor: `${habit.color_code}`}} onClick={handleDeleteButton}>Delete habbit</button>
            <br></br>
            <br/>
            <UpdateHabitButton habit={habit} />

        </div>
         
       
    )
}

    return(
        <>
     <img  style={{backgroundColor: `${habit.color_code}`, height: '40px', width: '50px', float: 'left', display: 'block'}} onClick= {handleShowSettingsButton} src= 'https://cdn-icons-png.flaticon.com/512/126/126472.png' width="40" height="40"></img> 
        </>
    )
}

export default HabitSettings;
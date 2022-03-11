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
            <button onClick={handleExitSettingsButton}>Exit Settings</button>
            <br/>
            <br/>
            <button onClick={handleDeleteButton}>Delete habbit</button>
            <br></br>
            <br/>
            <UpdateHabitButton habit={habit} />

        </div>
         
       
    )
}

    return(
        <>
        <button onClick= {handleShowSettingsButton}> <img src= 'https://cdn-icons-png.flaticon.com/512/126/126472.png' width="40" height="40"></img> </button>
        </>
    )
}

export default HabitSettings;
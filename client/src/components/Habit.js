import React from "react";
import DailyProgressBar from "./DailyProgressBar";
import HabitSettings from "./HabitSettings";
import DailyProgressBarHabit from "./DailyProgressBarHabit";
import { useHistory } from "react-router-dom";

function Habit({habit}){
    const history = useHistory()

    console.log(habit)
    function handleBackButton(){
        history.push(`/`)

    }

    return(

        <> 
        <button style={{backgroundColor: `${habit.color_code}`}} onClick={handleBackButton} >Back</button>
        <div  style={{backgroundColor: `white`, border: '1rem solid'}}>

        <HabitSettings habit={habit}/>
        <h2>{habit.habit_name}</h2>
        <div>
            <br/>
            <h3>Description:</h3>
            <p>{habit.goal_description}</p>
            <br/>
            <h3>{`${habit.goal_days - habit.goal_tracker} days left!`}</h3>
        </div>
        <DailyProgressBarHabit habit={habit}/>
        <br></br>
        <br></br>
        



        </div>


        </>
    )
}
export default Habit;
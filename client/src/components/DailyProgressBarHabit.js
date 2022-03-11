import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import '../ProgressBar.css';



function DailyProgressBarHabit({width = 400, habit}){
    const [value, setValue] = useState(0)
    const [percent, setPercent] = useState(0)
    const [dailyTaskComplete, setDailyTaskComplete] = useState(true)

    const history = useHistory()

    const percentValue = 1/habit.goal_days;
    let totalProgress= percentValue* habit.goal_tracker

    useEffect(() => {
        setPercent(totalProgress)
        setValue(percent * width);
    });
    function add_goal_progress(){
        fetch(`/increment/${habit.id}`)
        .then(res=>res.json)
        .then(data=> console.log(data))

        console.log(habit.goal_tracker)
        history.push('/')

    }

    return(
        <>
        <div className="progress-div" style={{width: width}}>
            <div style={{width: `${value}px`
            , backgroundColor: `${habit.color_code}`
        }}
            className="progress"/>
        </div>

        <button 
            onClick={() => 
                // fetch('/increment/:id')
                // .then(res=>res.json)
                // .then(data=> console.log(data))
                percent < 1 ? (setPercent(percent + percentValue), setDailyTaskComplete(false),  add_goal_progress()) : setDailyTaskComplete(true)}
                style={{backgroundColor: `${habit.color_code}`}}
                >
        {dailyTaskComplete? <p >Complete Goal</p> : <p>Goal Completed</p>}
        </button>

        </>
    );
}

export default DailyProgressBarHabit;
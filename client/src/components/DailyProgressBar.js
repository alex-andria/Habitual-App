import React, { useState, useEffect } from "react";
import '../ProgressBar.css';


function DailyProgressBar({width = 400, habit}){
    const [value, setValue] = useState(0)
    const [percent, setPercent] = useState(0)
    const [dailyTaskComplete, setDailyTaskComplete] = useState(true)

    const percentValue = 1/habit.goal_days;
    let totalProgress= percentValue* habit.goal_tracker
    // useEffect(setPercent(totalProgress), [])
  
    useEffect(()=>{
        setPercent(totalProgress)
    })
    useEffect(() => {

        setValue(percent * width);
    });

    return(
        <>
        <div className="progress-div" style={{width: width}}>
            <div style={{width: `${value}px`
            , backgroundColor: `${habit.color_code}`
        }}
            className="progress"/>
        </div>

        {/* <button 
            onClick={() => 
                percent < 1 ? (setPercent(percent + percentValue), setDailyTaskComplete(false)) : <></>}
                style={{backgroundColor: `${habit.color_code}`}}
                >
        {dailyTaskComplete? <p >Complete Goal</p> : <p>Goal Completed</p>}
        </button> */}

        </>
    );
}

export default DailyProgressBar;
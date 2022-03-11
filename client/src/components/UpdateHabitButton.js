import React, {useState} from "react";


function UpdateHabitButton({habit}){

    const [showHabitPatchForm, setShowHabitPatchForm]= useState(false)
    const [habitStateInput, setHabitStateInput]= useState('')
    const [goalDescriptionInput, setGoalDescriptionInput]= useState('')
    const [goalDaysInput, setGoalDaysInput]= useState('')
    const [colorInput, setColorInput]= useState('')

    console.log(habit.id)

    function handleShowHabitPatchForm(){
        setShowHabitPatchForm(true)
    }
    function handleBackButton(){
        setShowHabitPatchForm(false)
    }
    function handleHabitNameChange(e){
        setHabitStateInput(e.target.value)
    }

    function handleGoalDescriptionChange(e){
        setGoalDescriptionInput(e.target.value)
    }

    function handleGoalDaysInput(e){
        setGoalDaysInput(e.target.value)
    }

    function handleColorChange(e){
        setColorInput(e.target.value)
    }
    function handleSubmit(e){
        const new_habit = {
            habit_name : habitStateInput,
            goal_description : goalDescriptionInput,
            goal_days : goalDaysInput,
            goal_tracker : 0,
            color_code : colorInput
        }
        e.preventDefault()
        fetch(`http://localhost:3000/habits/${habit.id}`, {
            method : 'PATCH',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(new_habit)
        })
        .then(res => res.json())
        .then(res=> console.log(res))
    }

    if(showHabitPatchForm===true){
        return(
            <div>
                <button onClick={handleBackButton}>Back</button>
            <form>

                <label name="Habit name">Habit Name:</label>
                <input name="Habit name" onChange={handleHabitNameChange}></input>
                <br/>
                <br/>
                <label name= "Habit goal">Habit goal description:</label>
                <input name= "Habit goal" onChange={handleGoalDescriptionChange}></input>
                <br/>
                <br/>
                <label name="Goal days">Number of days you would like to track this goal:</label>
                <input name="Goal days" onChange={handleGoalDaysInput}></input>
                <br/>
                <br/>
                <label name="color code">Change habit color:</label>
                <input name="color code" type="color" onChange={handleColorChange}></input>
                <br/>
                <br/>
                <input type="submit" value="Update Habit" onClick={handleSubmit}></input>
            </form>

            </div> 
           
        )
    }

    return(

        <button onClick={handleShowHabitPatchForm}>Change Habit</button>

    )


}

export default UpdateHabitButton

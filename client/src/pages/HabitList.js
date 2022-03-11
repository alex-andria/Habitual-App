import { useEffect, useState } from "react";
import DailyProgressBar from "../components/DailyProgressBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import Habit from "../components/Habit";
import { useHistory } from "react-router";

function HabitList({setIndivisualHabit}) {
  const [habits, setHabits] = useState([]);
  const [reRender, setReRender]= useState(0)

  useEffect(()=>{
    setReRender((o)=>o+1)
  }
  ,[])

  const history = useHistory();

  useEffect(() => {
    fetch("/habits")
      .then((r) => r.json())
      .then(setHabits);
  }, []);
  console.log(habits);

  return (
    <Wrapper>
      {habits.length > 0 ? (
        habits.map((habit) => (
          <Recipe
            onClick={() => {
              const id = habit.id;
              fetch(`/habits/${id}`)
                .then((res) => res.json())
                .then((data) => {
                  setIndivisualHabit(data);
                  history.push(`/habits/${id}`)
                });
            }}
            key={habit.id}
          >
            <Box>
              <h2>{habit.habit_name}</h2>
              {/* <div>
                <br/>
                <h3>Description:</h3>
                <p>{habit.goal_description}</p>
                <br/>
                <h3>Number of days for goal:</h3>
                <p>{habit.goal_days}</p>
              </div> */}
              <DailyProgressBar habit={habit} />
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>Currently No Habits Being Tracked</h2>
          <Button as={Link} to="/newHabit">
            Create a New Habit Tracker
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default HabitList;

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewHabit from "../pages/NewHabit";
import HabitList from "../pages/HabitList";
import Habit from "./Habit";

function App() {
  const [user, setUser] = useState(null);
  const [indivisualHabit, setIndivisualHabit]= useState(null)

   useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />

      <main>
        <Switch>
          <Route path="/newHabit">
            <NewHabit user={user} />
          </Route>
          <Route  path="/habits/:id">
            <Habit habit={indivisualHabit} />
          </Route>
          <Route path="/habits">
            <HabitList />
          </Route>
          <Route path="/">
            <HabitList setIndivisualHabit={setIndivisualHabit}/>
          </Route>
        </Switch>
      </main>
      
    </>
  );
}

export default App;


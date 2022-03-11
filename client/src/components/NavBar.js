import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Habit from "./Habit.png";
// import "../nav.css";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <Wrapper>
        <Logo>
          <Link to="/">Habitual</Link>
        </Logo>
        <Nav>
          <Button as={Link} to="/newHabit">
            New Habit
          </Button>
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Nav>
      </Wrapper>

      <header>
        <img 
          src={Habit} alt="Habitual Logo" 
          className="avatar" 
        />
        <nav>
          <ul>
          <Logo>
            <Link Link to="/">Habitual</Link>
          </Logo>
            <li>
              <a href="#">Track New Habit</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: black;
`;

const Logo = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  color: #00916e;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
  background-color: black;
`;

export default NavBar;

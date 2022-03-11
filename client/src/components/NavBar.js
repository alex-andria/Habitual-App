import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import Habit from "./Habit.png";
import "../nav.css";

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

      <div class="header">
        <a href="#default" class="logo">
          CompanyLogo
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.header`
  background-color: ##85c7f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-family: "Montserrat";
  font-size: 3rem;
  color: ##85C7F2;
  margin: 0;
  line-height: 1;
  height: 80px;
  margin-left: 40px;
  object-fit: contain
  width: 100%;
  
  

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
  background-color: ##85c7f2;
`;

export default NavBar;

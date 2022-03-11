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
      

       

      <div class="header">
        <a href="/home" class="logo">
          {`Welcome to Habitual`}
        </a>
        <div class="header-right">
          <a  href="/home"> Home </a>
          
          <a  href="/newHabit">New Habit</a>
          
          <a  onClick={handleLogoutClick} href="/logOut">Log Out</a>
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

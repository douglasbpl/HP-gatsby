import styled from "styled-components";
import img from "../../images/pf5.jpg";


export const Menu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  width:100%;
  list-style: none;
  background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 10vh;
  width: 100%;
  list-style: none;
  font-size: 30px;
  `;

export const ListItem = styled.li`
  font-size: min(5vh, 5vw);
    color: blue;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: blueviolet;
    transform: scale(1.4);
  }`

  
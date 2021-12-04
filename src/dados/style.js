import styled from "styled-components";
import { createGlobalStyle } from "styled-components"
import img from "../images/pf4.png";
import imgcard from "../images/mapa.gif";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
   background-image: url(${img});    
  }`

export const BoxMother = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

export const ContainerBooks = styled.div`
display:flex;
flex-direction: column;
justify-content: flex;
align-items: center;
background-image: url(${img});
`

export const Ttlb = styled.h1`
height: 100px;
font-size: 50px;
color:aliceblue;
`

export const Sectb = styled.section`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 70%;
  min-height: 100vh;
  `

export const BoxBooks = styled.div`
display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgcard});
  background-position: center;
  height: 40vh;
  width: 300px;
  margin: 1rem;
  border-style: 16px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transform: scale(1.3);
  }
  `
  
export const Sbtlb = styled.h2`
font-size: 3vh;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: cyan;
  `
export const Imgb = styled.img`
height: 50%;
  width: 50%;
  `

export const TtlSo = styled.h1`
font-size: 10vh;
font-weight: bolder;
color: aliceblue;
`

export const ContainerSo = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height:100vh;
widh: 100%;
`
export const BoxSo = styled.div`
height: 62vh;
width: 90%;
background-color: gray;
`
export const ParaSo = styled.p`
font-size:3vh;
color:chartreuse;
font-weight: bolder;
`

export const Menu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  width:100%;
  list-style: none;
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

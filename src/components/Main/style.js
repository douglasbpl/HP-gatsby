import styled from "styled-components";
import img from "../../images/casashp.gif";



export const BoxImg = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const BoxFather = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
  min-height: 100vh;
`;

export const BoxSon = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  background-color: blue;
  border: double;
  height: 75vh;
  width: 340px;
  margin: 1rem;
  border-style: 16px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: min(2.4vh,1.9vh);
  color: firebrick;
font-weight: bolder
`;

export const BoxTxt = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${img});
  background-repeat: no-repeat;
  background-size: 339px 100%;;
  background-position: center;
`;
export const Sttl = styled.h2`
  font-size: 3vh;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: blue;
`;


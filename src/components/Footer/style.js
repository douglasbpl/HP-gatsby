import styled from "styled-components";
import img from "../../images/pf5.jpg";


export const FooterBox = styled.div`
  display: flex;
  height: 20vh;
  width:100%;
  background: linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MenuFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  color: red;
  font-size: 30px;
  height: 10vh;
  width: 100%;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: blue;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: blueviolet;
    transform: scale(1.4);
  }
`;

export const Icon = styled.img`
  height: 4vh;
`;
export const Lk= styled.a`
`
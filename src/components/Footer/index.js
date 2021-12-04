import React from 'react'
import * as S from  './style'
import { Link } from 'gatsby'
import Facebook from "../../images/Facebook.png";
import Insta from "../../images/Insta.png";
import Linkedin from "../../images/Linkedin.png";
import Github from "../../images/github.png";

export function Footer() {
    return(
        <S.FooterBox>
          <S.MenuFooter>
            <S.List>
            <S.ListItem>
            <Link style={{color: "aliceblue", textDecoration: "none", fontSize:"50px" }} to="/">Inicio</Link>
            </S.ListItem>
            <S.ListItem>
            <Link style={{color: "aliceblue", textDecoration: "none", fontSize:"50px" }} to="/Books">Livros</Link>
            </S.ListItem>
            <S.ListItem>
            <Link style={{color: "aliceblue", textDecoration: "none", fontSize:"50px" }} to="/Sobre">Sobre</Link>
            </S.ListItem>
              <S.ListItem>
                <S.Lk href="https://www.facebook.com/douglas.brasil.37/" target="_blank">
                  <S.Icon src={Facebook} alt="Facebook" />
                </S.Lk>
              </S.ListItem>
              <S.ListItem>
                <S.Lk href="https://www.instagram.com/douglasbpl/" target="_blank">
                  <S.Icon src={Insta} alt="Instagran" />
                </S.Lk>
              </S.ListItem>
              <S.ListItem>
                <S.Lk href="https://www.linkedin.com/in/douglas-brasil-pereira-lopes-614099108/" target="_blank">
                  <S.Icon src={Linkedin} alt="Linkedin" />
                </S.Lk>
              </S.ListItem>
              <S.ListItem>
                <S.Lk href="https://github.com/douglasbpl" target="_blank">
                  <S.Icon src={Github} alt="Github" />
                </S.Lk>
              </S.ListItem>
            </S.List>
          </S.MenuFooter>
        </S.FooterBox>
      )
}
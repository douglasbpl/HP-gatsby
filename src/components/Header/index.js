import React from 'react'
import * as S from  './style'
import { Link } from 'gatsby'



export function Header() {
    return (        
            <S.Menu>
                <S.List>
                       <S.ListItem>
                        <Link style={{ color: "aliceblue", textDecoration: "none", fontSize:"50px" }} to="/">Inicio</Link>
                        </S.ListItem>
                    <S.ListItem>
                        <Link style={{color: "aliceblue", textDecoration: "none", fontSize:"50px" }}to="/Books">Livros</Link>
                        </S.ListItem>
                    <S.ListItem>
                        <Link style={{ color: "aliceblue", textDecoration: "none", fontSize:"50px" }}to="/Sobre">Sobre</Link>
                        </S.ListItem>                 
                </S.List>
            </S.Menu>       
    )
}
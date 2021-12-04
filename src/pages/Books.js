import React, { useState } from 'react'
import { Link } from 'gatsby'
import books from '../dados/Bk'
import * as S from  '../dados/style';

export default function Books() {
const [book, setBook] = useState(books)
    return (
        <S.ContainerBooks>
            <S.GlobalStyle />
            <S.Menu>
                <S.List>
                       <S.ListItem>
                       <Link to="/" style={{ color: "aliceblue", textDecoration: "none", fontSize:"60px", font_weight: "bolder" }}>voltar para página inicial</Link>
                        </S.ListItem>
                    <S.ListItem>
                        <Link style={{ color: "aliceblue", textDecoration: "none", fontSize:"60px", font_weight: "bolder" }}to="/Books">Livros</Link>
                        </S.ListItem>
                    <S.ListItem>
                        <Link style={{ color: "aliceblue", textDecoration: "none", fontSize:"60px", font_weight: "bolder" }}to="/Sobre">Sobre</Link>
                        </S.ListItem>                 
                </S.List>
            </S.Menu>            
            <S.Ttlb>Livros de Hary Potter</S.Ttlb>
            <S.Sectb>
            {book.map((item, index) => (
                <S.BoxBooks key={index}>
                    <S.Sbtlb>{item.Nome}</S.Sbtlb>
                    <S.Imgb src={item.img}/>
                    </S.BoxBooks>
            ))}
            </S.Sectb>                        
        </S.ContainerBooks>
    )
}
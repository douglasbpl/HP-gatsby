import React, { useState, useEffect} from 'react'
import { api } from '../../services/api'
import * as S from  './style'


export function Main() {

    const [hp, setHp] = useState([])    

    useEffect(() => {
    api.get()
    // console.log(api.get())
    .then(response => setHp(response.data))
    }, [])      
        
    return (            
        <S.BoxFather>          
          {hp.slice(0,25).map((item, index) => (
            <S.BoxSon key={index}>
              <S.BoxImg>
                <S.Img src={item.image} alt="Character Picture" />
              </S.BoxImg>
              <S.BoxTxt>
                <S.Sttl>{item.name}</S.Sttl> 
                <S.Paragraph>
                  Date Of Birth: 
                    {item.dateOfBirth}
                </S.Paragraph>                       
                <S.Paragraph>
                  Species:
                    {item.species}
                </S.Paragraph>
                  <S.Paragraph>
                  House:
                    {item.house}
                </S.Paragraph>
                <S.Paragraph>
                  Interpreted by:
                    {item.actor}
                </S.Paragraph>
                </S.BoxTxt>
            </S.BoxSon>
          ))}
        </S.BoxFather>        
    )
}
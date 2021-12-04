import React from 'react';
import { GlobalStyle, BoxMother } from '../dados/style';


import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export  default function Index() {
  return(
    <BoxMother>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </BoxMother>
    
  )
}
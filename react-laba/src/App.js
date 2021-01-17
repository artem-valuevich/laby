import React from 'react'
import "./index.css"
import Header from "./components/Header"
import Container from "./components/Container"
import ContainerContext from "./contexts/containerContext"
import HeaderContext from "./contexts/headerContext";

export default function App() {
  return (
    <>
      <HeaderContext>
        <Header />
      </HeaderContext>

      <ContainerContext>
        <Container />
      </ContainerContext>
    </>
    
  )
}
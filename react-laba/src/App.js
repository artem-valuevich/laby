import React from 'react'
import "./index.css"
import Header from "./components/Header"
import Container from "./components/Container"
import ContextProvider from "./context"

export default function App() {
  return (
    <ContextProvider>
      <Header />
      <Container />
    </ContextProvider>

  )
}
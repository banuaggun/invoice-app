import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainArea from './components/MainArea'

function App() {

  return (
    <div>
      <Header />
      <Router>
        <MainArea />        
      </Router>
    </div>
  )
}

export default App

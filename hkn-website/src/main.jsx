import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CareerFair from './pages/CareerFair.jsx'
import Home from './assets/home/Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-fair" element={<CareerFair />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

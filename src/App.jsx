import React from 'react'
import Footer from './components/Footer'
import "./App.css"
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Registration from './pages/Registration'

const App = () => {
  return (
    <div className='app'>
      <Header />
        <main>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Routes>
      </BrowserRouter>
        </main>
      <Footer />
    </div>
  )
}

export default App
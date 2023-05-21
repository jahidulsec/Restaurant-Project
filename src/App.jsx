import React from 'react'
import Footer from './components/Footer'
import "./App.css"
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Registration from './pages/Registration'
import ConfirmationPage from './pages/ConfirmationPage'
import { AlertProvider } from './context/alertContext'
import Modal from './components/Modal'
import About from './components/About'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <AlertProvider>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/confirmation' element={<ConfirmationPage />} />
            <Route path='/online-menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Routes>
          <Modal />
        </main>
      </AlertProvider>
      <Footer />
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import AuctionLanding from './components/auctionSystem/AuctionLanding'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import NavigationBar from './components/auctionSystem/components/NavigationBar'
import Footer from './components/auctionSystem/About Us/Footer'
import SignUpPage from './pages/SignUp'
import { SignupForm } from './pages/SignupForm'
import Assets from './pages/Assets'
// import AuctionLayout from './components/auctionSystem/UserSide/AuctionLayout'
// import AuctionLayout1 from './components/auctionSystem/UserSide1/AuctionLayout'
// import AuctionLayout2 from './components/auctionSystem/UserSide2/AuctionLayout'
// import AuctionLayout3 from './components/auctionSystem/UserSide3/AuctionLayout'
// import AuctionLayout4 from './components/auctionSystem/UserSide4/AuctionLayout'
import Property from './components/auctionSystem/MyProperty/AuctionLayout'
import UserSideP from './components/auctionSystem/UsersidePrime/AuctionLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Contact } from './components/auctionSystem/components/Contact'

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <NavigationBar/>
    <Routes>
      <Route path="/" element={<AuctionLanding/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/properties" element={<Assets/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      {/* <Route path="/components/auctionSystem/UserSide/AuctionLayout" element={<AuctionLayout/>}/> */}
      {/* <Route path="/userside" element={<AuctionLayout/>}/> */}
      {/* <Route path="/selectproperty" element={<AuctionLayout1 />} /> */}
      {/* <Route path="/commercial" element={<AuctionLayout2 />} />
      <Route path="/residential" element={<AuctionLayout3 />} />
      <Route path="/land" element={<AuctionLayout4 />} /> */}
      <Route path="/property" element={<Property/>}/>
      <Route path="/usersideprime" element={<UserSideP/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignUp from './screens/SignUp'
import Login from './screens/Login'

import Screenroute from './screen-2/screenroute'
import ScreenRoute from '../screen-3/ScreenRoute'

import MainComponents from './businesspart/mainComponents'
import DeliveringForEveryone from './screen-2/deliverysection'
import FoodItems from '../screen-3/FoodItem'
import SwiggyAboutUs from './screen-2/swiggyaboutus'
import SwiggyDineoutBanner from '../screen-3/SwiggyDeanut'
import Cart from '../screen-3/Cart'



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<SignUp/>} />
      <Route path='/route-2' element = {<Screenroute/>}/>
      <Route path='/route-3' element = {<ScreenRoute/>} />
      <Route path='/Businesses' element = {<MainComponents/>} />
      <Route path='/delivery' element = {<DeliveringForEveryone/>} />
      <Route path='/foodItems' element = {<FoodItems/>} />
      <Route path='/SinghReastaurentOffer' element = {<SwiggyDineoutBanner/>} /> 
      <Route path='/Cart' element = {<Cart/>} />
      
    </Routes> 
    </>
  )
}

export default App

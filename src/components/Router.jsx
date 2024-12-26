import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

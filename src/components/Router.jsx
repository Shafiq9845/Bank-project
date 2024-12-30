import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Header from './Header'
import NavBar from './NavBar'
import CircularList from './CircularList'
import FAQList from './FAQList'
import FavouritesCircular from './FavouritesCircular'
import DCircularSearch from './DCircularSearch'
import MemorandumCancelled from './MemorandumCancelled'
import AskContent from './AskContent'
import DRelativeSearch from './DRelativeSearch'
import OldCircularIndexSearch from './OldCircularIndexSearch'
import DocumentSearch from './DocumentSearch'
import DocketListAll from './DocketlistAll'
import Calcultor from './Scientific_calcualtor/ScientificCalculator'
import Calendar from './Calendar/Calendar'
import MasterCircularSearch from './MasterCirculateSearch'
export default function Router() {
  const WithNavBar = ({ children }) => {
    return (
      <div>
        <Header />
        <NavBar />
        {children}
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        {/* <Header/>
          <NavBar/> */}
        <Routes>
          <Route exact path='/' element={<WithNavBar><Home /></WithNavBar>} />
          <Route path='/circularlist' element={<WithNavBar><CircularList /></WithNavBar>} />
          <Route path='/faqlist' element={<WithNavBar><FAQList /></WithNavBar>} />
          <Route path='/favouritescircular' element={<WithNavBar><FavouritesCircular /></WithNavBar>} />
          <Route path='/dcircularsearch' element={<WithNavBar><DCircularSearch /></WithNavBar>} />
          <Route path='/memorandumcancelled' element={<WithNavBar><MemorandumCancelled /></WithNavBar>} />
          <Route path='/askcontent' element={<WithNavBar><AskContent /></WithNavBar>} />
          <Route path='/drelativesearch' element={<WithNavBar><DRelativeSearch /></WithNavBar>} />
          <Route path='/oldcircularindexsearch' element={<WithNavBar><OldCircularIndexSearch /></WithNavBar>} />
          <Route path='/documentsearch' element={<WithNavBar><DocumentSearch /></WithNavBar>} />
          <Route path='/docketlistall' element={<WithNavBar><DocketListAll /></WithNavBar>} />
          <Route path='/calculator' element={<WithNavBar><Calcultor /></WithNavBar >} />
          <Route path='/calendar' element={<WithNavBar><Calendar /></WithNavBar >} />
          <Route path='/mastercircularsearch' element={<WithNavBar><MasterCircularSearch /></WithNavBar >} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

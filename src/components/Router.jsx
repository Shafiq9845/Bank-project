import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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

export default function Router() {

  const WithNavBar=({children})=>{
    return(
      <div>
        <Header/>
        <NavBar/>
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
                <Route exact path='/' element={<WithNavBar><Home/></WithNavBar>}/>
                <Route path='/circularlist' element={<WithNavBar><CircularList/></WithNavBar>}/>
                <Route path='/faqlist' element={<WithNavBar><FAQList/></WithNavBar>}/>
                <Route path='/favouritescircular' element={<WithNavBar><FavouritesCircular/></WithNavBar>}/>
                <Route path='/dcircularsearch' element={<WithNavBar><DCircularSearch/></WithNavBar>}/>
                <Route path='/memorandumcancelled' element={<WithNavBar><MemorandumCancelled/></WithNavBar>}/>
                <Route path='/askcontent' element={<WithNavBar><AskContent/></WithNavBar>}/>
                <Route path='/drelativesearch' element={<WithNavBar><DRelativeSearch/></WithNavBar>}/>

                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Beers from '../assets/beers.png'
import Newbeers from '../assets/new-beer.png'
import Rbeer from '../assets/random-beer.png'
 
function Home() {
  return (
    <div>
       <ul>
        <li><Link to='/beers'><img src={Beers} alt='pic'></img> All Beers</Link></li>
        <li><Link to='/random-beer'><img src={Rbeer} alt='pic'></img>Random Beers</Link></li>
        <li><Link to='/new-beer'><img src={Newbeers} alt='pic'></img>New Beer</Link></li>
       </ul>     
        
        
        
    </div>
  )
}

export default Home
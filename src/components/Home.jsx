import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div>
       <ul>
        <li><Link to='/beers'>All Beers</Link> </li>
        <li><Link to='/random-beer'><img src='/assets/random-beer.png' alt='pic'></img>Random Beers</Link></li>
        <li><Link to='/new-beer'>New Beer</Link></li>
       </ul>     
        
        
        
    </div>
  )
}

export default Home
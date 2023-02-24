import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import axios from 'axios'
import SingleBeer from './components/SingleBeer'

function App() {
  const [beers, setBeers] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      /* const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments')
      setApartments(response.data) */
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
      const parsed = await response.json()
      setBeers(parsed)
    }
    fetchData()
  }, [])



  return (
    <div className="App">
    <nav>
        <ul>
          <li>
            <NavLink to='/'>
            Home
            </NavLink>
          </li>
        </ul>
      </nav>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/beers' element={<ListBeers beers={beers}/>} />
     <Route path='/new-beer' element={<NewBeer />} />
     <Route path='/random-beer' element={<RandomBeer />} />
     <Route path='/beers/:beerId' element={<SingleBeer />} />
     </Routes>
    </div>
  )
}

export default App

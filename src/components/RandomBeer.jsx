import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({
    image_url: " ",
    name: " ",
    tagline: " ",
    first_brewed: " ",
    attenuation_level: " ",
    description: " ",
    contributed_by: " "
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      setRandomBeer(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [])

  return (
    <div style={{
      border: "1px solid white",
      borderRadius: "12px",
      marginBottom: "1rem", display: 'flex', alignItems: 'center'
     }}>
      <div>
        <img src={randomBeer.image_url} alt='pic' style={{heit: "150"}}></img>
      </div>
      <div>
         {randomBeer.name}
         {randomBeer.tagline}
         {randomBeer.first_brewed}
         {randomBeer.attenuation_level}
         {randomBeer.description}
         {randomBeer.contributed_by}
      </div>
    </div>
  )
}

export default RandomBeer
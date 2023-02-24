import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function SingleBeer() {
  const {beerId} = useParams()
  const [singleBeer, setSingleBeer] = useState({
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
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      setSingleBeer(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [beerId])

  return (
    <div>
      <div>
        <img src={singleBeer.image_url} alt='pic'></img>
      </div>
      <div>
         {singleBeer.name}
         {singleBeer.tagline}
         {singleBeer.first_brewed}
         {singleBeer.attenuation_level}
         {singleBeer.description}
         {singleBeer.contributed_by}
      </div>
    </div>
  )
}

export default SingleBeer
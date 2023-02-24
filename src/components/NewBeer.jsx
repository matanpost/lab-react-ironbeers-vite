import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function NewBeer() {
const [name, setName] = useState('')
const [tagline, setTagline] = useState('')
const [description, setDescription] = useState('')
const [first_brewed, setFirst_brewed] = useState('')
const [brewers_tips, setBrewers_tips] = useState('')
const [attenuation_level, setAttenuation_level] = useState(0)
const [contributed_by, setContributed_by] = useState('')

const handleSubmit = async event => {
  event.preventDefault()
  const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
  


  const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    console.log(response)
   /*  const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newApartment),
    })
    const parsed = await response.json()
    console.log(parsed) */
    setName('')
    setTagline('')
    setDescription('')
    setFirst_brewed('')
    setFirst_brewed('')
    setBrewers_tips('')
    setBrewers_tips('')
    setContributed_by('')
    setAttenuation_level(0)
}  


  return (
    <>
      <h2>New Beer</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name:
          <input type='text' value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
         Tagline:
          <input type='text' value={tagline} onChange={event => setTagline(event.target.value)} />
        </label>
        <label>
        Description:
          <input type='text' value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <label>
        First brewed:
          <input type='text' value={first_brewed} onChange={event => setFirst_brewed(event.target.value)} />
        </label>
        <label>
        Brewers tips:
          <input type='text' value={brewers_tips} onChange={event => setBrewers_tips(event.target.value)} />
        </label>
        <label>
        Brewers tips:
          <input type='text' value={brewers_tips} onChange={event => setBrewers_tips(event.target.value)} />
        </label>
        <label>
         Attenuation level:
          <input
            type='number'
            value={attenuation_level}
            onChange={event => setAttenuation_level(event.target.value)}
            step='0.5'
          />
        </label>
        <label>
        Contributed by:
          <input type='text' value={contributed_by} onChange={event => setContributed_by(event.target.value)} />
        </label>

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default NewBeer
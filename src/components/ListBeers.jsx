import React from 'react'
import { Link } from 'react-router-dom'


function ListBeers({beers}) {
    

    return (
    <div>
        {beers.map((beer) => (
           <Link to={`/beers/${beer._id}`}>
           <div style={{
            border: "1px solid white",
            borderRadius: "12px",
            marginBottom: "1rem", display: 'flex', alignItems: 'center', height: "300px", width: "250px"
           }}>
              <div>
                 <img src={beer.image_url} alt={beer.name} style={{height: "200px"}}></img>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <h2>{beer.name}</h2>
                 <h3>{beer.tagline}</h3>
                 <p>{beer.contributed_by}</p>
              </div>
              
           </div>
           </Link>
           
          
        ))}
    </div>
  )
}

export default ListBeers
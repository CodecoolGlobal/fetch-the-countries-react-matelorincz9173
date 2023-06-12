import React from 'react'

export default function CountryData({country, backClicked}) {

  return (
    <div>
      <div>
          <h1>{country.name.official}</h1>
          <h2>Region:{country.region}</h2>
          <a href={country.maps.googleMaps}>Google Maps</a>
          <h2>Population:{country.population}</h2>
          <img src={country.flags.png}></img>
      </div>
        <button onClick={backClicked}>Back</button>
    </div>
  )
}

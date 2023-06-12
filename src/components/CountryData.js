import React from 'react'

export default function CountryData({country, backClicked}) {

  return (
    <div>
        <h1>{country.name.official}</h1>
        <h2>{country.region}</h2>
        <a href={country.maps.googleMaps}>Google Maps</a>
        <h2>{country.population}</h2>
        <img src={country.flags.png}></img>
        <button onClick={backClicked}>Back</button>
    </div>
  )
}

import React from 'react'
import {useState } from 'react';

export default function Countries({data,countryClicked}) {

  const [sorting, setSorting] = useState(0);

  const sortByAsc = () => {
    setSorting(1);
  }

  const sortByDesc = () => {
    setSorting(2);
  }

  const dataSorter = (data, sortBy) => {
    if(sortBy == 0){
      return data;
     } else {
      return data.sort((a,b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
  
        if (sortBy === 1) {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
        } else if (sortBy === 2) {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
        }
      })
    }
  }

  return (
    <div>
      <button onClick={sortByAsc}>ASC</button>
      <button onClick={sortByDesc}>DESC</button>
      {dataSorter(data,sorting).map((country, index) => (
        <div key={index}>
            <h2>{country.name.common}</h2>
            <button onClick={countryClicked}>Learn More</button>
        </div>
    ))}
    
    </div>
    
  )
}

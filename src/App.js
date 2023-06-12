import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import CountryData from './components/CountryData';

function App() {

  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [page, setPage] = useState(true); //true means starter page, false means details page

  const url = "https://restcountries.com/v3.1/all";
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);        
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  }, []);

  const countryClicked = (event) => {
    setPage(false);
    setSelectedCountry(event.target.parentNode.querySelector('h2').textContent);
  }

  const backClicked = () => {
    setPage(true);
    setSelectedCountry(null);
  }





  //data && console.log(data);

  return (
    <div className="App">
      {data && 
        (page ? (<Countries data={data} countryClicked={countryClicked}/>)
              : (<CountryData backClicked={backClicked} country={data.filter(country => country.name.common == selectedCountry)[0]}/>))
      }
    </div>
  );
}

export default App;

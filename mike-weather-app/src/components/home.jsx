import React, { useState } from "react";


function Home() {
console.log("@Home")
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${location}&appid=99fbe4a587172c22b1f5e22674379cdf`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
      setLocation('')
    }
    
  }

  return (

    <div className="home">
            <div>
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter Location" type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          
        </div>
        <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{Math.round(data.main.feels_like)}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{Math.round(data.wind.speed)} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home

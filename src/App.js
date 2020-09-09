//
//

import React, { useState, useEffect } from 'react';
import './App.css';

import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './components/InfoBox';

import Map from './components/Map';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);

        setCountryInfo(data);
      });
  };

  console.log(countryInfo);

  return (
    <div className='app'>
      <div className='app__left'>
        <div className='app__header'>
          <h1>
            Covid<strong>19</strong> Tracker
          </h1>
          <FormControl className='app__dropdown'>
            <Select
              variant='outlined'
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value='worldwide'>WorldWide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className='app__stats'>
          <InfoBox title='Cases' cases={1234} total={2000} />
          <InfoBox title='Recovered' cases={1234} total={3000} />
          <InfoBox title='Deaths' cases={1234} total={4000} />
        </div>

        <Map />
      </div>
      <Card className='app__right'>
        <CardContent>
          <h3>Live Cases By Country</h3>
          <h3>WorldWide New Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

// https://disease.sh/v3/covid-19/countries

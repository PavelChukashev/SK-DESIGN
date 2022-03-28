import { React, useState } from 'react'
import cities from '../features/data/cities.json'
import { Select, MenuItem } from '@mui/material'

const SelectCity = () => {
    const [city, setCity] = useState('Выберите город *')
    console.log(cities)

    const handleChange = (event) => {
        setCity(event.target.value);
      };
    
  return (
        <Select
            label='Выберите город *'
            value={city}
            onChange={handleChange}
        >
            {cities.map( (city) => {
                return <MenuItem value={city.name} key={city.id}>{city.name}</MenuItem>
            })}
        </Select>
  )
}

export default SelectCity
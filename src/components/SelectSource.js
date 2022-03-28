import { React, useState } from 'react'
import sources from '../features/data/sources.json'
import { Select, MenuItem } from '@mui/material'

const SelectSource = () => {
    const [source, setSource] = useState('Откуда узнали про нас?')
    console.log(sources)

    const handleChange = (event) => {
        setSource(event.target.value);
      };
    
  return (
        <Select
            label='Откуда узнали про нас?'
            value={source}
            onChange={handleChange}
        >
            {sources.map( (source) => {
                return <MenuItem value={source}>{source}</MenuItem>
            })}
        </Select>
  )
}

export default SelectSource
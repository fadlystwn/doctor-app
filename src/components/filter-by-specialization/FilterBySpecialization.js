import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'

const FilterBySpecialization = (props) => {
    return (
        <TextField
            id="filterByHostpital"
            select
            variant="outlined"
            fullWidth
            
            value={''}
            onChange={props.handleFilterBySpecialization}
            
        >
           
            {
                props.specialization && props.specialization.map( (item, index) => {
                    return (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    )
                })
            }

        </TextField>
    )
}

export default FilterBySpecialization

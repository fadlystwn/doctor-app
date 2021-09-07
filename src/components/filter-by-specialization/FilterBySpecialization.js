import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'

const FilterBySpecialization = (props) => {
    return (
        <TextField
            id="filterBySpecialization"
            select
            name="specialization"
            variant="outlined"
            fullWidth
            value={props.selectValue}
            onChange={props.handleFilterBySpecialization}
            
        >
            
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
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

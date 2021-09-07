import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'

const FilterByHospital = (props) => {
    return (
        <TextField
            id="filterByHostpital"
            select
            variant="outlined"
            fullWidth
            
            value={props.selectValue}
            onChange={props.handleFilterByHospital}
            
        >
             <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                props.hospitals && props.hospitals.map( (item, index) => {
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

export default FilterByHospital

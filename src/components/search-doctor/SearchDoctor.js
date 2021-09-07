import React from 'react'
import TextField from '@material-ui/core/TextField';

const SearchDoctor = (props) => {
    return (
        <TextField
            onChange={props.handleSearch}
            fullWidth 
            placeholder="Keyword" 
            variant="outlined"
        />
    
    )
}

export default SearchDoctor

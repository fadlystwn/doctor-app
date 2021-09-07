import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

const Finder = (props) => {
    return (
        <Paper variant="outlined">
        <Box p={2}>
           <Box mb={3}>
                <Typography variant="h4" component="h1">Doctor Finder</Typography>
           </Box>
                <Grid 
                    spacing={3}
                    container
                >
                {props.children}
            </Grid>
        </Box>
    </Paper>
    )
}

export default Finder

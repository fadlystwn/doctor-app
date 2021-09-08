import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Finder = ({ children }) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Box mb={3}>
          <Typography variant="h4" component="h1">
            Doctor Finder
          </Typography>
        </Box>
        <Grid spacing={3} container>
          {children}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Finder;

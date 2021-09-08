import TextField from '@material-ui/core/TextField';

const SearchDoctor = ({ handleSearch }) => {
  return <TextField onChange={handleSearch} fullWidth placeholder="Keyword" variant="outlined" />;
};

export default SearchDoctor;

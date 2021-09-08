import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const FilterBySpecialization = ({ handleFilterBySpecialization, selectValue, specialization }) => {
  return (
    <TextField
      id="filterBySpecialization"
      select
      name="specialization"
      variant="outlined"
      fullWidth
      value={selectValue}
      onChange={handleFilterBySpecialization}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {specialization &&
        specialization.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
    </TextField>
  );
};

export default FilterBySpecialization;

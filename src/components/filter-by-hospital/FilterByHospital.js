import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const FilterByHospital = ({ handleFilterByHospital, hospitals, selectValue }) => {
  return (
    <TextField
      id="filterByHostpital"
      select
      variant="outlined"
      fullWidth
      value={selectValue}
      onChange={handleFilterByHospital}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {hospitals &&
        hospitals.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
    </TextField>
  );
};

export default FilterByHospital;

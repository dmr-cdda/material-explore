import { Box, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
  return (
      <Box width='250px'>
          <TextField label="Select country" select value={countries} onChange={handleChange} fullWidth SelectProps={{
              multiple : true
          }}
              size='small'
              color='secondary'
              helperText="Please select your country"
            //   error
          >
              <MenuItem value="BAN">Bangladesh</MenuItem>
              <MenuItem value="US">USA</MenuItem>
              <MenuItem value="AU">Australia</MenuItem>
          </TextField>
    </Box>
  )
}

export default MuiSelect
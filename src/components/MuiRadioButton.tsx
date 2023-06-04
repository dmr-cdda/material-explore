import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState('');

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value)
  }
  return (
    <Box>
      <FormControl error>
        <FormLabel>
          Years of experiences
        </FormLabel>
        <RadioGroup name="job-experience"
          aria-labelledby="job-experience-group-label"
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small"/>} label="0-2" value="0-2"/>
          <FormControlLabel control={<Radio size="small"/>} label="3-5" value="3-5"/>
          <FormControlLabel control={<Radio size="small"/>} label="6-10" value="3-10"/>
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextFied = () => {
  return (
      <Stack spacing={4}>
          <Stack  direction="row" spacing={2}>
              
          <TextField label="name" variant="outlined"/>
          <TextField label="name" variant="filled"/>
          <TextField label="name" variant="standard"/>
          </Stack>

          <Stack direction="row" spacing={2}>
              <TextField label="Small secondary" size="small" color="secondary"/>
          </Stack>
          <Stack direction="row" spacing={2}>
              <TextField label="Form input" size="small" color="secondary" required/>
              <TextField label="password" size="small" color="secondary" required helperText="Do not show your password"
              type="password"
              />
              <TextField defaultValue="hello"  size="small" color="secondary" required
              InputProps={{readOnly: true}}
              />
          </Stack>

          <Stack direction="row" spacing={2}>
              <TextField label="Amount" InputProps={{
                  startAdornment : <InputAdornment position="start">$</InputAdornment>
              }}/>
              <TextField label="Weight" InputProps={{
                  endAdornment : <InputAdornment position="end">Kg</InputAdornment>
              }}/>
          </Stack>
    </Stack>
  )
}

export default MuiTextFied
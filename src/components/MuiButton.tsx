import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from 'react';

const MuiButton = () => {
    
    // const [formats, setFormats] = useState<string[]>([]);
    const [formats, setFormats] = useState<string|null>(null);
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string|null) => {
        setFormats(updatedFormats); 
    };

    console.log(ToggleButtonGroup);
    
    return (
      <Stack spacing={2}>
      <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">Text</Button>
          <Button variant="contained">Text</Button>
          <Button variant="outlined">Text</Button>
            </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="success">Success</Button>
            </Stack>
            
            <Stack direction="row" spacing={2} display="block">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
                <IconButton aria-label='send' color='success' size='small'><SendIcon/></IconButton>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple onClick={() => alert("Clicked")}>Send</Button>
            </Stack>


            {/* Button group */}
            <Stack direction="row" aria-label="alignment button group">
                <ButtonGroup variant='outlined' orientation='vertical' size="small" color="secondary">
                    <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            {/* Toggle button group  */}
            <Stack direction="row">
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange} size='small' color="success" orientation='vertical' exclusive>
                    <ToggleButton value="bold" aria-label='bold' disableRipple><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value="italic" aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value="underline" aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack> 
  )
}

export default MuiButton
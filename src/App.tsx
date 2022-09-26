import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
function App() {
  const [checked,setChaecked]=useState(false);
  console.log({checked});
  const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setChaecked(event.target.checked);
  }
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch color="warning" size="medium" checked={checked} onChange={changeHandler} />}
      />
    </Box>
  );
}

export default App;

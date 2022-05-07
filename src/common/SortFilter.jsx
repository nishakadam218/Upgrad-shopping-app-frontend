import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SortFilter({price,priceHandler}) {
        
  return (
   <>
    <Box sx={{ minWidth: 120,marginLeft:'30px', paddingTop:"30px" }} >
      <div className="filterBox" >
     <p>Sort By:</p>
      <FormControl sx={{width:300,height:"40px"}}>
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Select..."
          value={price}
          onChange={priceHandler}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='' disabled>Default</MenuItem>
          <MenuItem value={20}>Price high to low</MenuItem>
          <MenuItem value={30}>Price low to high</MenuItem>
          <MenuItem value={30}>Newest</MenuItem>
        </Select>
      </FormControl>
      </div>
    </Box>
   </>
  )
}

export default SortFilter
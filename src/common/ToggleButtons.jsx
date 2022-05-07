import  React ,{useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const categories=[
  "All",
  "Apparel",
  "Electronics",
  "Footwares",
  "Personal care"
]
 function ToggleButtons({category,setCategory}) {
  const [alignment, setAlignment] = useState('All');
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
   <div className='toggle-container'>
    <ToggleButtonGroup
      sx={{marginTop:'80px'}}
      color="primary"
      orientation="vertical"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      
       {categories.map((category) => (
                <ToggleButton
                  key={category}
                  value={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </ToggleButton>
              ))}
    </ToggleButtonGroup>
    </div>
  );
}
export default ToggleButtons;
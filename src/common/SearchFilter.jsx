import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from'@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './customStyles';
import{useNavigate} from "react-router-dom"
import HelmetText from './HelmetText';

function SearchFilter() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
     navigate(`/products/${keyword}`);
    } else {
      navigate("/products/");
    }
  };
  return (
  <>
  <HelmetText title="Search-Upgrad E-Shop"/>
  <form onSubmit={searchSubmitHandler}>
         <Search>
           <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setKeyword(e.target.value)}
            />
             <Button type="submit" value="Search" variant="containet" sx={{padding:' 0 10px'}}>Search</Button>
          </Search>
         
     </form>
  </>
  )
}

export default SearchFilter
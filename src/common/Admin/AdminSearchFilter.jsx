import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from'@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../customStyles';
import{useNavigate} from "react-router-dom"

function AdminSearchFilter() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
     navigate(`/admin/products/${keyword}`);
    } else {
      navigate("/admin/products");
    }
  };
  return (
  <>
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

export default AdminSearchFilter
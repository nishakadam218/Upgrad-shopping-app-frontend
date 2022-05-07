import React, { useEffect, useState } from "react";
import ProductCard from "../../common/ProductCard";
import { Grid, Container, Stack,Box,Slider,ToggleButtonGroup,ToggleButton} from "@mui/material";
import HelmetText from "../../common/HelmetText";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../common/Loader";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import SortFilter from "../../common/SortFilter";
import ToggleButtons from "../../common/ToggleButtons";

const categories=[
  "ALL",
  "APPAREL",
  "ELECTRONICS",
  "FOOTWARE",
  "PERSNOALCARE"
]
function Products() {
  const dispatch = useDispatch();
  //const keyword = match.params.keyword;
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = React.useState([0,5000]);
  // const [price, setPrice] = React.useState('newest');
  const [category, setCategory] = useState('');
  const [alignment, setAlignment] = useState('ALL');

  const handleChange = (event, newAlignment) => {
    event.preventDefault()
    setAlignment(newAlignment);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const { loading, error, products, resultPerPage, productsCount ,filteredProductsCount,} =
    useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProduct(keyword, currentPage,price,category));
  }, [dispatch, keyword, currentPage,price,category]);
 
  let count = filteredProductsCount;
  return (
         <>
         <Container maxWidth="lg">
        {loading ? (
          <Loader />
        ) : (
          <>   
      <HelmetText title="Home-Upgrad E-Shop" />
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

    {/* <ToggleButtons setCategory={setCategory} category={category}/> */}
    
   <Box sx={{ minWidth: 120,marginLeft:'30px' }}>
    <div className="filterBox">
     <p style={{marginBottom:"20px"}}>Sort By:</p>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={0}
              max={5000}
            />
            </div>  
       </Box>
       
       {/* <SortFilter priceHandler={priceHandler} price={price} /> */}
            <Container maxWidth="lg">
              <Grid container spacing={3} sx={{ paddingBottom: "70px" }}>
                {products &&
                  products.map((product) => {
                    return (
                      <>
                        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={product._id} >
                          <ProductCard product={product} />
                        </Grid>
                      </>
                    );
                  })}
              </Grid>
              
             {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
            </Container>
          </>
        )}
        </Container>
      </>
   
  );
}

export default Products;

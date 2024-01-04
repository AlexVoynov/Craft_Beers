import axios from "axios";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import BeerCard from "../BeerCard/BeerCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      axios
        .get(
          `https://api.punkapi.com/v2/beers?food=${keyword}`
        )
        .then((data) => {
          setBeers(data.data);
        });
    }
  }, [keyword]);

  return (
    <>
      <SearchForm setKeyword={setKeyword} />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}
        >
          {beers.map((el, i) => (
            <Grid item xs={4} sm={4} md={4} xl={4} key={i}>
              <BeerCard beer={el} key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SearchPage;


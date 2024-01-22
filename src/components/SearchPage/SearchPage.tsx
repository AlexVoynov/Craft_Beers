import axios from "axios";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import BeerCard from "../BeerCard/BeerCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AdvancedSearchForm from "../AdvancedSearchForm/AdvancedSearchForm";

interface SearchPageProps {
  loggedIn: boolean;
}

const SearchPage = ({ loggedIn }: SearchPageProps) => {
  const [food, setFood] = useState<string>("");
  const [abv_gt, setAbv_gt] = useState<string>("");
  const [abv_it, setAbv_it] = useState<string>("");
  const [ibu_gt, setIbu_gt] = useState<string>("");
  const [ibu_it, setIbu_it] = useState<string>("");
  const [ebc_gt, setEbc_gt] = useState<string>("");
  const [ebc_it, setEbc_it] = useState<string>("");

  const [beers, setBeers] = useState([]);

  

  const createUrl = () => {
    let url = `https://api.punkapi.com/v2/beers?`;
    if (food !== "") {
      url = url + `&food=${food}`;
    }
    if (abv_gt !== "") {
      url = url + `&abv_gt=${abv_gt}`;
    }
    if (abv_it !== "") {
      url = url + `&abv_lt=${abv_it}`;
    }
    if (ibu_gt !== "") {
      url = url + `&ibu_gt=${ibu_gt}`;
    }
    if (ibu_it !== "") {
      url = url + `&ibu_lt=${ibu_it}`;
    }
    if (ebc_gt !== "") {
      url = url + `&ebc_gt=${ebc_gt}`;
    }
    if (ebc_it !== "") {
      url = url + `&ebc_lt=${ebc_it}`;
    }
    return url;
  };

  console.log(createUrl());

  useEffect(() => {
    axios.get(createUrl()).then((data) => {
      setBeers(data.data);
    });  
  }, [food, abv_gt, abv_it, ibu_gt, ibu_it, ebc_gt, ebc_it]);

  return (
    <>
      {loggedIn ? (
        <AdvancedSearchForm
          setAbv_gt={setAbv_gt}
          setAbv_it={setAbv_it}
          setIbu_gt={setIbu_gt}
          setIbu_it={setIbu_it}
          setEbc_gt={setEbc_gt}
          setEbc_it={setEbc_it}
        />
      ) : (
        <SearchForm setFood={setFood} />
      )}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}
        >
          {beers.map((el, i) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              xl={4}
              key={i}
            >
              <BeerCard beer={el} key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SearchPage;


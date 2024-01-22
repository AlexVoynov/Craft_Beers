import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import BeerCard from "../BeerCard/BeerCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  const [todaysBeers, setTodaysBeers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
      .then((data) => {
        console.log(data.data);
        setTodaysBeers(data.data);
      });
  }, []);

  const typographyStyles = { fontSize: "1.5rem", mt: ".8rem" };

  return (
    <>
      <Typography variant="h1" align="center" sx={typographyStyles}>
        The first 80 beer recipes from our database:
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}
        >
          {todaysBeers.map((el, i) => (
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

export default HomePage;

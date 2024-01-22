import React from "react";
import { ListItem, List, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange, brown, yellow, deepOrange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface MaltObj {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface HopsObj {
  name: string;
  amount: {
    value: string;
    unit: string;
  };
  add: string;
  attribute: string;
}

interface TempObj {
  value: number;
  unit: string;
}

interface BeerObj {
  id: number;
  name: string;
  description: string;
  image_url: string;
  first_brewed: string;
  ibu: number;
  abv: number;
  tagline: string;
  brewers_tips: string;
  food_pairing: string[];
  ingredients: {
    malt: MaltObj[];
    hops: HopsObj[];
    yeast: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  volume: {
    value: number;
    unit: string;
  };
  method: {
    fermentation: {
      temp: TempObj;
      duration: number;
    };
    mash_temp: {
      temp: TempObj;
      duration: number;
    }[];
    twist: string | null;
  };
  ebc: number;
}

interface BeerCardProps {
  beer: BeerObj;
  key: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BeerCard = ({ beer }: BeerCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Changing the color of the card avatar depending on the ebc beer
  function avatarColor(num: number): any {
    if (num < 10) {
      return yellow[600];
    }
    if (num >= 10 && num < 20) {
      return orange[300];
    }
    if (num >= 20 && num < 40) {
      return orange[500];
    }
    if (num >= 40 && num < 60) {
      return orange[700];
    }
    if (num >= 60 && num < 80) {
      return orange[900];
    }
    if (num >= 80 && num < 120) {
      return deepOrange[900];
    }
    if (num >= 120) {
      return brown[700];
    }
  }

  return (
    <ListItem key={beer.id} sx={{ justifyContent: "space-evenly" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: avatarColor(beer.ebc),
                fontSize: ".8em",
                textAlign: "center",
              }}
              aria-label="recipe"
            >
              {`${beer.abv}%`}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={beer.name}
          subheader={`${beer.tagline}`}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image={beer.image_url}
          alt={beer.name}
          sx={{
            transform: "rotate(90deg) translate(-0%, -65%) scale(1.5)",
            maxHeight: "fit-content",
            maxWidth: "fit-content",
          }}
        /> */}
        <img
          src={beer.image_url}
          alt={beer.name}
          style={{
            border: "1px solid red",
            height: "12em",
            transform: "rotate(90deg) translate(-0%, -65%) scale(1.5)",
            // maxHeight: "fit-content",
            // maxWidth: "fit-content",
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {beer.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="subtitle2">
              Food pairing:{" "}
              {beer.food_pairing.map((item) => {
                return <Typography variant="body2">{item};</Typography>;
              })}
            </Typography>
            <Typography paragraph variant="subtitle2">
              First brewed {beer.first_brewed}
            </Typography>
            <Typography variant="body2">Bitterness {beer.ibu} IBU</Typography>
            <Typography variant="body2">
              Boil volume: {beer.boil_volume.value} {beer.boil_volume.unit};
            </Typography>
            <Typography paragraph variant="body2">
              Resulting volume: {beer.volume.value} {beer.volume.unit};
            </Typography>
            <Typography paragraph variant="subtitle2">
              Ingredients:
              <li>
                Malt:{" "}
                {beer.ingredients.malt.map((item) => {
                  return (
                    <Typography variant="body2">
                      {item.name} - {item.amount.value} kilograms;
                    </Typography>
                  );
                })}
              </li>
              <li>
                Hops:{" "}
                {beer.ingredients.hops.map((item) => {
                  return (
                    <Typography variant="body2">
                      {item.name} - {item.amount.value} grams at {item.add} for{" "}
                      {item.attribute};
                    </Typography>
                  );
                })}
              </li>
              <li>
                Yest:
                <Typography variant="body2">
                  {beer.ingredients.yeast}
                </Typography>
              </li>
            </Typography>
            <Typography paragraph variant="subtitle2">
              Method:
              <li>
                Mash temperature:{" "}
                {beer.method.mash_temp.map((item) => {
                  return (
                    <Typography variant="body2">
                      {item.temp.value} degrees Celsius for {item.duration}{" "}
                      minutes;
                    </Typography>
                  );
                })}
              </li>
              <li>
                Fermentation temperature:
                <Typography variant="body2">
                  {beer.method.fermentation.temp.value} degrees Celsius;
                </Typography>
              </li>
              {beer.method.twist ? (
                <li>
                  Twist:{" "}
                  <Typography variant="body2">{beer.method.twist}.</Typography>
                </li>
              ) : null}
            </Typography>
            <Typography variant="subtitle2">Brewers tips:</Typography>
            <Typography paragraph variant="body2">
              {beer.brewers_tips}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ListItem>
  );
};

export default BeerCard;

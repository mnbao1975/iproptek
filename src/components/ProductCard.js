import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { useContext } from "react";
import { ShoppingContext } from "../contexts/ShoppingContext";
import { HeaderContext } from "../contexts/HeaderContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard({ id, title, description, image, price }) {
  const classes = useStyles();
  const { addToCartEvent } = useContext(ShoppingContext);
  const { cartCounter, setCartCounter } = useContext(HeaderContext);

  const onClickHandler = () => {
    setCartCounter(cartCounter + 1);
    addToCartEvent({ id, title, description, image, price });
  };
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          ${price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <AddShoppingCartIcon onClick={onClickHandler} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useCartContext } from "../../../context/Cart_context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 15,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    position: "relative",
  },
  cover: {
    width: 151,
  },
  LightGreenBg: {
    backgroundColor: "#d1fae5",
  },
  CloseButton: {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: 1,
  },
}));

export default function ShoppingCartItem({
  _id,
  img,
  name,
  price,
  qty,
  category,
  size,
}) {
  const classes = useStyles();
  const { remove, increase, decrease, toggleAmount } = useCartContext();

  return (
    <Card className={classes.root}>
      <CardContent className={`${classes.content} ${classes.LightGreenBg}`}>
        <IconButton
          className={classes.CloseButton}
          color="inherit"
          aria-label="close"
          onClick={() => remove(_id)}
        >
          <CloseIcon />
        </IconButton>
        <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/random"
          title="Live from space album cover"
        />

        <Typography variant="body2" color="textSecondary" gutterBottom>
          {category}
        </Typography>

        <Typography variant="h6" component="h2">
          {name}
        </Typography>
        <Grid container>
          {/* <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Size
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="body1" component="div">
              {size}
            </Typography>
          </Grid> */}
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="body1"
              component="div"
              style={{ display: "flex" }}
            >
              <button className="w-5  text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:text-gray-700  hover:bg-gray-300">
                <span
                  className="m-auto text-2xl font-thin"
                  onClick={() => {
                    decrease(_id);
                  }}
                >
                  -
                </span>
              </button>
              <div
                className=" flex justify-center w-5 font-semibold items-center text-gray-700  bg-gray-100 outline-none  focus:outline-none text-md hover:text-black"
                // placeholder={qty}
              >
                {qty}
              </div>
              <button className="w-5 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer  dark hover:text-gray-700 hover:bg-gray-300">
                <span
                  className="m-auto text-2xl font-thin"
                  onClick={() => {
                    increase(_id);
                  }}
                >
                  +
                </span>
              </button>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography
              variant="body1"
              component="div"
              style={{ paddingTop: "5px" }}
            >
              price
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="body1"
              component="div"
              style={{ paddingTop: "5px" }}
            >
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

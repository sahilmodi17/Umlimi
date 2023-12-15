import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../../Context";
import { useCartContext } from "../../../context/Cart_context";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "5rem",
    minWidth: "275",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  BlackText: {
    color: "black", // Set text color to green
  },
  GreenButton: {
    backgroundColor: "rgb(0, 230, 167)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0, 196, 144)",
    },
  },
});

const formatCartToOrders = (cart, userId) => {
  const products = cart.map((item) => ({
    productId: item._id,
    qty: item.qty,
  }));

  return {
    userId,
    products,
  };
};

export default function OrderSummaryItem({ total }) {
  const classes = useStyles();
  const navigateTo = useNavigate();
  const { userId, setUserId } = useUserContext();
  const { cart, clearCart } = useCartContext();
  console.log(cart);

  const handleProceed = async (e) => {
    try {
      console.log(userId);
      if (!userId) {
        const userResponse = await axios.get("/api/v1/dashboard/profile", {
          withCredentials: true,
        });
        console.log(userResponse);
        const newUserId = userResponse.data.user._id;
        setUserId(newUserId);
      }

      const orderData = formatCartToOrders(cart, userId);
      console.log(orderData);

      try {
        const response = await axios.post(
          "/api/v1/order/placeOrder",
          orderData
        );
        alert("Order Placed Sucessfully");
        console.log("Order placed:", response.data);
        clearCart();
      } catch (orderError) {
        console.error("Error placing the order:", orderError);
      }
    } catch (profileError) {
      console.error("Error getting user profile:", profileError);

      navigateTo("/login");
    }
  };

  return (
    <Card className={classes.root} elevation={15}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Shopping Cart
        </Typography>
        <Typography variant="div" component="h1">
          Order Summary
        </Typography>
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Total
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="h6"
              component="div"
              className={classes.BlackText}
            >
              ${total}
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography
              variant="body1"
              component="div"
              className={classes.BlackText}
            >
              Discount
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="h6"
              component="div"
              className={classes.BlackText}
            >
              $0
            </Typography>
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Offer applied
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="h6"
              component="div"
              className={classes.BlackText}
            >
              $0
            </Typography>
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Tax
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="h6"
              component="div"
              className={classes.BlackText}
            >
              $0
            </Typography>
          </Grid>

          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Grand Total
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography
              variant="h6"
              component="div"
              className={classes.BlackText}
            >
              $0
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button
          size="large"
          color="green"
          className={classes.GreenButton}
          onClick={handleProceed}
        >
          Proceed
        </Button>
      </CardActions>
    </Card>
  );
}

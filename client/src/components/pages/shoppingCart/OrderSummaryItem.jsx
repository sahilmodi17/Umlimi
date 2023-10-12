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
    backgroundColor: "rgb(59,183,126)",
    color: "white",
  },
});

export default function OrderSummaryItem({ total }) {
  const classes = useStyles();
  const navigateTo = useNavigate();
  const handleProceed = async () => {
    console.log("inside HandleProceed");
    try {
      const response = await axios.get("/api/v1/dashboard/profile", {
        withCredentials: true,
      });
    } catch (error) {
      // alert("please login");
      console.log(error);
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

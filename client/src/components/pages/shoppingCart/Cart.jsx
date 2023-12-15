import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import { useCartContext } from "../../../context/Cart_context";

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {cart.map((item) => {
                  return <ShoppingCartItem key={item.id} {...item} />;
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <OrderSummaryItem total={total} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Cart;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Context.jsx";
import { CartProvider } from "./context/Cart_context.jsx";

ReactDOM.render(
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>,
  document.getElementById("root")
);

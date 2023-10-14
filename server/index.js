const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");

const PORT = 8000;
const auth = require("./routes/auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authentication = require("./middleware/authentication");

const dashboardRouter = require("./routes/dashboardRouter");
const productrouter = require("./routes/product");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");

const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/v1/auth", auth);
app.use("/api/v1/admin", productrouter);
app.use("/api/v1/dashboard", authentication, dashboardRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/cart", cartRouter);

const start = async () => {
  console.log("this time");
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

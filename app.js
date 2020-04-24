const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//const expressValidator = require("express-validator");

require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
//const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");
const productRoutes = require("./routes/product");
const specificationRoutes = require("./routes/specification");
//const braintreeRoutes = require("./routes/braintree");
//const orderRoutes = require("./routes/order");

// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //I added 08.03.20, because last Server Discovery and Monitoring engine was deprecated
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator());
app.use(express.json());

app.use(cors());

// routes middleware
app.use("/api", authRoutes);
// app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", tagRoutes);
app.use("/api", productRoutes);
app.use("/api", specificationRoutes);
//app.use("/api", braintreeRoutes);
//app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

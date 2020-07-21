const fs = require("fs");
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const cors = require("cors");

require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
//const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");
const productRoutes = require("./routes/product");
//const braintreeRoutes = require("./routes/braintree");
//const orderRoutes = require("./routes/order");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// app.use(cors());

app.use('/uploads/images', express.static(path.join('uploads', 'images'))); 
app.use(express.static(path.join('public'))); 

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//   next();
// });


// routes middleware
app.use("/api", authRoutes);
// app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", tagRoutes);
app.use("/api", productRoutes);
//app.use("/api", braintreeRoutes);
//app.use("/api", orderRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.use((req, res, next) => {
//   const error = 'Could not find this route.';
//   throw error;
// });

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//const port = process.env.PORT || 8000;

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //I added 08.03.20, because last Server Discovery and Monitoring engine was deprecated
    useCreateIndex: true
  })
  .then(() => {
    app.listen(8000);
  })
  .then(() => console.log("DB Connected"))
  .catch(err => {
    console.log(err);
  })

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

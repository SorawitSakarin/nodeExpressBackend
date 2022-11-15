const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placeRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images',express.static(path.join('uploads','images')));

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');  //allow every domain to access here
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

app.use("/api/places", placeRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route by HttpError", 404);
  throw error;
});

app.use((error, req, res, next) => {
  // First: Check that the response has already been sent >> Response can not sent more than 1 time
  if(req.file){
    fs.unlink(req.file.path, err =>{
      console.log(err);
    }); 
  }
  if (res.headerSent) {
    next(error);
  }
  res.status(error.code || 500);
  console.log(error);
  res.json({ message: error.message || "An unknown error occured" });
});

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tpfxpo7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(4000);
    console.log('Server connected successfully');
  })
  .catch(err =>{
    console.log(err);
  });

const path = require("path");
const express = require('express');
const morgan = require('morgan');

var app = express();

var puerto = process.env.PORT || "2000";

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"/public")));

app.use((req, res, next) => {
  next();
});

app.listen(puerto, ()=>
{
  console.log("Servidor lanzado en el puerto:",puerto);
});

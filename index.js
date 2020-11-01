//https://api-curso-275412.ew.r.appspot.com
//creamos nuestra API, aqui configuramos el servidor y todo lo demas
//npm init crea el JSON
//npm install express mongoose crea express e mongoose
//npm install --save-dev nodemon crea el nodemon
//cambiar el start del package-json

//Importamos mongoose para usar mongoDB
const mongoose = require("mongoose");

//Habilito cors para usar API
const cors = require("cors");

//creamos el servidor con express
const express = require("express");

const routes = require("./routes");

const app = express();
app.use(cors());

//importamos body-parser porque nos servirá para recibir la petición de postman
const bodyParser = require("body-parser");

//conectar con mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://root:root@cluster0-t4baf.mongodb.net/inems", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor activo.", process.env.PORT || 4000);
});
//FIN creamos el servidor con express

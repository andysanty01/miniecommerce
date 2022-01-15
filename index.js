//const {db} = require("./cnn");
//db.any("select *")

const express = require("express");
const app = express();
// Reconocer html
const bodeParser = require("body-parser");
const { request } = require("express");
const cors = require("cors");

//midlewears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Aumento de CORS / Permisos para acceder al servicio
app.use(cors({ origin: true, credentials: true }));

//routes
app.use(require("./routes/index"));

//execution server web
app.listen(7000);
console.log("Servidor corriendo en http://localhost:7000");
app.get("/", (req, res) => {
  res.send("Bienvenidos al servicio REST E-COMMERCE");
});

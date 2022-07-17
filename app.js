require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express();
const port = process.env.PORT || 3000 ;

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

//REQUIRE RUTAS
const tracksRouter = require("./routes");
/*Aqui invoco a las rutas*/
app.use("/api", tracksRouter)


app.listen(port,() => {
    console.log(`Servidor Funcionando en el puerto ${port}`)
})

dbConnect()
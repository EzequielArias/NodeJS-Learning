const express = require("express");
const router = express.Router();
const  uploadMiddleware  = require("../utils/handleStorage");
const { validatorGetItem } = require("../validation/storage");
const { 
    createItem,
    getItems, 
    getItem,  
    deleteItem 
        } = require("../controllers/storage")


//Obtener detalles de items
router.get("/", getItems);
//Obtener detalle
router.get("/:id", validatorGetItem,getItem);
//Eliminar un registro
router.delete("/:id",validatorGetItem,deleteItem);
//Crear un registro
router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router
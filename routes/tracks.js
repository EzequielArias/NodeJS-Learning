const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks")
const { validatorCreateItem, validatorGetItem } = require("../validation/tracks")

//TODO http://localhost/tracks GET, POST, DELETE. PUT
/**
 * Lista los items
 */
router.get("/", getItems);

//obetener detalle  de los items
router.get("/:id", validatorGetItem ,getItem);

//Crear un registro
router.post("/",validatorCreateItem ,createItem);

// Actualizar un Registro
router.put("/:id",validatorGetItem,validatorCreateItem ,updateItem);

//Delete 
router.post("/",validatorCreateItem ,deleteItem);

module.exports = router
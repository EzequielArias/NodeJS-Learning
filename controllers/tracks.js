const { tracksModel } = require("../models");
/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res)  => {
    const data = await tracksModel.find({});
    res.send({data});
};
/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {
    let data = ["Hola","Mundo"]
    
    res.send({data})
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res) => {
    const {body} = req;
    console.log(body)
    let data = await tracksModel.create(body)
    res.send({ok : 1, data})
};

/**
 * Actualizar un registro
 * @param {} req 
 * @param {*} res 
 */
const updateItem = (req,res) => {};

/**
 *  Eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req,res) => {};


module.exports = {getItems, getItem, updateItem, deleteItem, createItem}
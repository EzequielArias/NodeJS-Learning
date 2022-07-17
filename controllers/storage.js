const fs = require("fs");
const { storageModel } = require("../models");
const {matchedData} = require("express-validator")
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
const { handleHttpError } = require("../utils/handleError");
/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res)  => {
    try{
        const data = await storageModel.find({});
        res.send({data});
    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};
/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try{
        const { id } = matchedData(req);
        const data = await storageModel.findById(id);
        await storageModel.deleteOne(id)
        res.send({data});
    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
 const createItem = async (req, res) => {
    try {
      const { file } = req;
      const body = {
        url: `${PUBLIC_URL}/${file.filename}`,
        filename: file.filename,
      };
      const response = await storageModel.create(body);
      res.send({ response });
    } catch (e) {
      handleHttpError(res, e);
    }
  };


/**
 *  Eliminar un registro 
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req,res) => {
    
    try{

        const { id } = matchedData(req);

        const dataFile = await storageModel.findById(id);

        const { filename } = dataFile;

        const filePath = `${MEDIA_PATH}/${filename}`;

        fs.unlinkSync(filePath);

        const data = {
            filePath,
            deleted : 1
        }
        res.send({data});
    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};


module.exports = {getItems, getItem, deleteItem, createItem}
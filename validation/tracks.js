const { check } = require("express-validator");
const validateResult = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
     check("cover")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
     check("album")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
     check("artist")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
     check("artist.name")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("artist.nickname")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("artist.nationality")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("duration")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("duration.start")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("duration.end")
    .exists()
    .notEmpty()
    .isLength({min:5, max:30}),
    check("mediaId")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => { return validateResult(req, res, next) }    
];




module.exports = {validatorCreateItem}
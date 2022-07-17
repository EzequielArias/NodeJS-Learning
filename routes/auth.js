const express = require("express");
const router = express.Router();
const { validatorLogin, validatorRegister } = require("../validation/auth");
const { registerCtrl,loginCtrl  } = require("../controllers/auth")
;
//
router.post("/register",validatorRegister,registerCtrl);

router.post("/login",loginCtrl);

module.exports = router;
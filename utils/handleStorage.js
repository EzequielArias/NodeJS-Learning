const multer = require("multer");

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        let pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename : function(req, file, cb){
        //TODO : mi-cv.pdf 

        let ext = file.originalname.split(".").pop()
        let filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage});


module.exports = uploadMiddleware;
const express = require("express");
const router = express.Router();
const {upload,uploadImage} = require('../controllers/usercontroller');

//localhost:3001/user/upload
router.post('/upload',uploadImage,upload);


module.exports = router;
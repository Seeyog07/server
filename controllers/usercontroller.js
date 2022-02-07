const multer = require('multer');

const multerConfig = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        const ext = file.mimetype.split('/')[1];
        callBack(null, `image-${Date.now()}.${ext}`);
    }
})
 
const isImage = (req,file,callBack) => {
    if(file.mimetype.startsWith('image')){
        callBack(null,true)
    }else{
        callBack(null,Error('Only image is allowed..'));
    }
};


const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

exports.uploadImage = upload.single('photo');




exports.upload = (req,res) => {
    console.log(res.file);
    res.status(200).json({
        success: "Success image",
    })
}
import path from 'node:path';
import multer from 'multer';
import express from 'express';
const router = express.Router();

console.log("Estoy en upload - line 6 - path.resolve(__dirname): "+path.resolve(__dirname))  
export const storage = multer.diskStorage({
    
    destination(req, file, cb) {
     // cb(null, 'uploads/');
     cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(
        null,
        `${Date.now()}-${file.originalname}`
      );
    },
  });
function checkFileType(file: any, cb: any) {
    const filetypes = /jpg|jpeg|png/;
   // const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const extname = filetypes.test((file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Images only!');
    }
  }
  
  const uploadImg = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  });
  
  // @desc    upload image
  // @route   Post /api/image
  // @access  Private

router.post('/image', uploadImg.single('image'), (req: any, res) => {
    //res.send(`/${req.file?.path}`);
    console.log("Estoy en uploadRoutes - line 58 - req.file?.filename: "+req.file?.filename)
    //const PathImage = `${req.file?.filename}`
    res.send(`${req.file?.filename}`);
  });
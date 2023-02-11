import multer from 'multer';
import path from "path";
//image upload
export const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join("./files/"));
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString() + file.originalname);
    }
});
// checking file type
export const fileFilter = (request, file, callback) => {
    if (
    //file.mimetype === 'image/png' ||
    //file.mimetype === 'image/jpg' ||
    //file.mimetype === 'image/jpeg'
    file.mimetype.startsWith('image')) {
        callback(null, true);
    }
    else {
        //callback(null, false)
        callback(null, false);
    }
};
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6
    },
    fileFilter: fileFilter
});

import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer';
import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

//image upload
export const storage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, path.join("./files/"));
    },
    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {
        callback(null, new Date().toISOString() + file.originalname);
    }
})

// checking file type
export const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback | any
): void => {
    if (
        //file.mimetype === 'image/png' ||
        //file.mimetype === 'image/jpg' ||
        //file.mimetype === 'image/jpeg'
        file.mimetype.startsWith('image')
    ) {
        callback(null, true);
    } else {
        //callback(null, false)
        callback(null, false);
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6
    },
    fileFilter: fileFilter
});

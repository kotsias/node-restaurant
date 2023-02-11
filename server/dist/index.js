//const express = require('express');
//const cors = require('cors');
//const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const morgan = require('morgan');
import express from 'express';
//import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import { configMongo } from './config/mongoose';
import { configRoutes } from './app/routerHandler';
import { configExchangeRates } from './config/exchangeRates';
//dotenv.config();
const app = express();
//const rootPath = path.normalize(path.join(__dirname, '../'));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(express.static(path.normalize(path.join(rootPath, '/files'))));
//app.use(express.static(path.normalize(path.join(rootPath, '/files'))));
//app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use(express.static(path.join(__dirname, '/files')));
// app.use((req: Request, res: Response, next) => {
//     if (req.url.startsWith('/assets')) { 
//         req.url = req.url.replace('/assets', '');
//     }
//     next();
// }, express.static(path.normalize(path.join(rootPath, 'src', 'assets'))));
//require("./config/mongoose.ts")(app);
//require('./app/routerHandler')(app);
configMongo(app);
configRoutes(app);
configExchangeRates(app);
// app.set('view engine', 'pug')
// app.set('views', path.join(rootPath, 'src', 'views'))
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Test'
//     });
// });
// app.get("/", (req: Request, res: Response) => {
//     res.render("index", { products: [] });
// });
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});

import { Request, Response } from 'express';
import fs from 'fs';
import stream from 'stream';
import path from 'path';

import categoryRoutes from './category/routes';
import productRoutes from './product/routes';
import cartRoutes from './cart/routes';
//import orderRoutes from './order/routes';
import merchantRoutes from './merchant/routes';

export const configRoutes = (app: any) => {
    app.use("/category", categoryRoutes);
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
    //app.use("/order", orderRoutes);
    app.use("/merchant", merchantRoutes);

    //Stream product assets
    app.get("/files/products/*", (req: Request, res: Response) => {
        const f = path.join(__dirname, '../../files', 'products', req.url.substring(req.url.lastIndexOf('/') + 1));
        const r = fs.createReadStream(f);
        const ps = new stream.PassThrough();
        stream.pipeline( r, ps, (err) => {
          if (err) {
            console.log(err);
            return res.sendStatus(404); 
          }
        });
        ps.pipe(res)    
    });
};

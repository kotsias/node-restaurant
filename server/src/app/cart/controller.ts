import { Request, Response } from 'express';
import { Get, Route, Tags,  Post, Body, Path } from 'tsoa';
import * as cartRepository from './repository';
import * as productRepository from '../product/repository';
import { ICartItem } from './model';
import { responseBadRequest, responseError, responseSuccess } from '../responseHandler';

@Route("cart")
@Tags("Cart")
export default class CartController {

    @Get("/")
    public async addItemToCart(req: Request, res: Response): Promise<void> {
        const {
            productId
        } = req.body;
        const quantity = Number.parseInt(req.body.quantity);
        const merchantId = req.body.merchantId;
        try {
            let cart = await cartRepository.cart(merchantId);
            let productDetails = await productRepository.productById(productId);
            if (!productDetails) {
                return responseError(res, 'Not Found', 'Invalid request');
            }
            // If Cart Exists
            if (cart) {
                // Check if index exists
                const indexFound = cart.items.findIndex((item: ICartItem) => item.productId.id == productId);
                // Removes an item from the the cart if the quantity is set to 0
                if (indexFound !== -1 && quantity <= 0) {
                    cart.items.splice(indexFound, 1);
                    if (cart.items.length == 0) {
                        cart.subTotal = 0;
                    } else {
                        cart.subTotal = cart.items
                                            .map((item: ICartItem) => item.total)
                                            .reduce((acc: number, next: number) => acc + next);
                    }
                }
                // Check if product exist, add the previous quantity with the new quantity and update the total price
                else if (indexFound !== -1) {
                    cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
                    cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
                    cart.items[indexFound].price = productDetails.price
                    cart.subTotal = cart.items
                                        .map((item: ICartItem) => item.total)
                                        .reduce((acc: number, next: number) => acc + next);
                }
                // Check if quantity is greater than 0 then add item to items
                else if (quantity > 0) {
                    cart.items.push({
                        productId: productId,
                        quantity: quantity,
                        price: productDetails.price,
                        //total: parseInt(productDetails.price * quantity)
                        total: productDetails.price * quantity
                    })
                    cart.subTotal = cart.items
                                        .map((item: ICartItem) => item.total)
                                        .reduce((acc: number, next: number) => acc + next);
                }
                // If quantity of price is 0 throw error
                else {
                    responseBadRequest(res, 'Something went wrong', 'Invalid request');
                }
                let data = await cart.save();
                responseSuccess(res, data, 'Process successful');
            }
            // Creates a new cart and then adds the item in the cart
            else {
                const cartData = {
                    items: [{
                        productId: productId,
                        quantity: quantity,
                        merchantId: merchantId,
                        //total: parseInt(productDetails.price * quantity),
                        total: productDetails.price * quantity,
                        price: productDetails.price
                    }],
                    //subTotal: parseInt(productDetails.price * quantity)
                    subTotal: productDetails.price * quantity
                }
                cart = await cartRepository.addItem(cartData)
                // let data = await cart.save();
                res.json(cart);
            }
        } catch (err) {
            responseBadRequest(res, err, "Something went wrong");
        }
    }

}

// export const addItemToCart = async (req: Request, res: Response) => {
//     const {
//         productId
//     } = req.body;
//     const quantity = Number.parseInt(req.body.quantity);
//     const merchantId = req.body.merchantId;
//     try {
//         let cart = await cartRepository.cart(merchantId);
//         let productDetails = await productRepository.productById(productId);
//         if (!productDetails) {
//             return responseError(res, 'Not Found', 'Invalid request');
//         }
//         // If Cart Exists
//         if (cart) {
//             // Check if index exists
//             const indexFound = cart.items.findIndex((item: ICartItem) => item.productId.id == productId);
//             // Removes an item from the the cart if the quantity is set to 0
//             if (indexFound !== -1 && quantity <= 0) {
//                 cart.items.splice(indexFound, 1);
//                 if (cart.items.length == 0) {
//                     cart.subTotal = 0;
//                 } else {
//                     cart.subTotal = cart.items
//                                         .map((item: ICartItem) => item.total)
//                                         .reduce((acc: number, next: number) => acc + next);
//                 }
//             }
//             // Check if product exist, add the previous quantity with the new quantity and update the total price
//             else if (indexFound !== -1) {
//                 cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//                 cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//                 cart.items[indexFound].price = productDetails.price
//                 cart.subTotal = cart.items
//                                     .map((item: ICartItem) => item.total)
//                                     .reduce((acc: number, next: number) => acc + next);
//             }
//             // Check if quantity is greater than 0 then add item to items
//             else if (quantity > 0) {
//                 cart.items.push({
//                     productId: productId,
//                     quantity: quantity,
//                     price: productDetails.price,
//                     //total: parseInt(productDetails.price * quantity)
//                     total: productDetails.price * quantity
//                 })
//                 cart.subTotal = cart.items
//                                     .map((item: ICartItem) => item.total)
//                                     .reduce((acc: number, next: number) => acc + next);
//             }
//             // If quantity of price is 0 throw error
//             else {
//                 responseBadRequest(res, 'Something went wrong', 'Invalid request');
//             }
//             let data = await cart.save();
//             responseSuccess(res, data, 'Process successful');
//         }
//         // Creates a new cart and then adds the item in the cart
//         else {
//             const cartData = {
//                 items: [{
//                     productId: productId,
//                     quantity: quantity,
//                     merchantId: merchantId,
//                     //total: parseInt(productDetails.price * quantity),
//                     total: productDetails.price * quantity,
//                     price: productDetails.price
//                 }],
//                 //subTotal: parseInt(productDetails.price * quantity)
//                 subTotal: productDetails.price * quantity
//             }
//             cart = await cartRepository.addItem(cartData)
//             // let data = await cart.save();
//             res.json(cart);
//         }
//     } catch (err) {
//         responseBadRequest(res, err, "Something went wrong");
//     }
// };

// export const createCart = async (req: Request, res: Response) => {
//     try {
//         const merchantId = req.body.merchantId;
//         let cart = await cartRepository.create();
//         if (!cart) {
//             responseBadRequest(res, "Something went wrong", "Cart creation failed");
//         }
//         responseSuccess(res, cart);
//     } catch (err) {
//         responseBadRequest(res, err, "Something went wrong");
//     }
// };

export const getMerchantCart = async (req: Request, res: Response) => {
    try {
        const merchantId = req.body.merchantId;
        let cart = await cartRepository.cart(merchantId);
        if (!cart) {
            responseBadRequest(res, "Something went wrong", "Cart not Found");
        }
        responseSuccess(res, cart);
    } catch (err) {
        responseBadRequest(res, err, "Something went wrong");
    }
};

export const emptyCart = async (req: Request, res: Response) => {
    try {
        const merchantId = req.body.merchantId;
        let cart = await cartRepository.cart(merchantId);
        cart.items = [];
        cart.subTotal = 0
        let data = await cart.save();
        responseSuccess(res, data, 'Cart has been emptied');
    } catch (err) {
        responseBadRequest(res, err, 'Something went wrong');
    }
};

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as cartRepository from './repository';
import * as productRepository from '../product/repository';
import { responseBadRequest, responseError, responseSuccess } from '../responseHandler';
export const addItemToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.body;
    const quantity = Number.parseInt(req.body.quantity);
    const merchantId = req.body.merchantId;
    try {
        let cart = yield cartRepository.cart(merchantId);
        let productDetails = yield productRepository.productById(productId);
        if (!productDetails) {
            return responseError(res, 'Not Found', 'Invalid request');
        }
        // If Cart Exists
        if (cart) {
            // Check if index exists
            const indexFound = cart.items.findIndex((item) => item.productId.id == productId);
            // Removes an item from the the cart if the quantity is set to 0
            if (indexFound !== -1 && quantity <= 0) {
                cart.items.splice(indexFound, 1);
                if (cart.items.length == 0) {
                    cart.subTotal = 0;
                }
                else {
                    cart.subTotal = cart.items
                        .map((item) => item.total)
                        .reduce((acc, next) => acc + next);
                }
            }
            // Check if product exist, add the previous quantity with the new quantity and update the total price
            else if (indexFound !== -1) {
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
                cart.items[indexFound].price = productDetails.price;
                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, next) => acc + next);
            }
            // Check if quantity is greater than 0 then add item to items
            else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: productDetails.price,
                    //total: parseInt(productDetails.price * quantity)
                    total: productDetails.price * quantity
                });
                cart.subTotal = cart.items
                    .map((item) => item.total)
                    .reduce((acc, next) => acc + next);
            }
            // If quantity of price is 0 throw error
            else {
                responseBadRequest(res, 'Something went wrong', 'Invalid request');
            }
            let data = yield cart.save();
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
            };
            cart = yield cartRepository.addItem(cartData);
            // let data = await cart.save();
            res.json(cart);
        }
    }
    catch (err) {
        responseBadRequest(res, err, "Something went wrong");
    }
});
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
export const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const merchantId = req.body.merchantId;
        let cart = yield cartRepository.cart(merchantId);
        if (!cart) {
            responseBadRequest(res, "Something went wrong", "Cart not Found");
        }
        responseSuccess(res, cart);
    }
    catch (err) {
        responseBadRequest(res, err, "Something went wrong");
    }
});
export const emptyCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const merchantId = req.body.merchantId;
        let cart = yield cartRepository.cart(merchantId);
        cart.items = [];
        cart.subTotal = 0;
        let data = yield cart.save();
        responseSuccess(res, data, 'Cart has been emptied');
    }
    catch (err) {
        responseBadRequest(res, err, 'Something went wrong');
    }
});

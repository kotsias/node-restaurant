var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Category } from "./model";
export const all = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = Category.find();
    return data;
});
export const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Category.findById(id);
    return data;
});
export const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Category.create(payload);
    return data;
});
export const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Category.findByIdAndRemove(id);
    return data;
});

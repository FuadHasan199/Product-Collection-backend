"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield product_service_1.ProductServices.createProduct(data);
        res.json({
            success: true,
            message: 'Product created successfully!',
            data: result
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "something wrong!",
            error: err
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProduct();
        res.json({
            success: true,
            message: "All product fetched successfully",
            data: result
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "could not fetch product",
            error: err
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProduct(productId);
        res.json({
            success: true,
            message: "All product fetched successfully",
            data: result
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "could not fetch product",
            error: err
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
};
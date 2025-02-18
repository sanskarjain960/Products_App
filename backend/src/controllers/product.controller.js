import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import {Product} from "../models/product.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getProducts = asyncHandler(async (req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(new ApiResponse(200,products, "products sent successfully"))
    } catch (error) {
        throw new ApiError(506, "server error in getProduct")
    }
})

export const createProduct = asyncHandler(async (req,res) =>{
    const product = req.body;
    console.log(req.body);
    if(!product.prodName || !product.price || !product.img){
        throw new ApiError(408, "Invalid input")
    }

    try {
        const prod = await Product.create({
            name: product.prodName,
            price: product.price,
            image: product.img,
        })
    
        res.status(200).json(new ApiResponse(200,prod,"product created successfully"))
    } catch (error) {
        throw new ApiError(505,"server error in create product")
    }

})

export const updateProduct = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(402,"invalid object id");
    }

    try {
        const prod = await Product.findByIdAndUpdate(
            id,
            product,
            {new: true}
        );
    
        res.status(200).json(new ApiResponse(200,prod, "product updated"))
    } catch (error) {
        throw new ApiError(505,"server error in update product")
    }
})

export const deleteProduct = asyncHandler(async (req,res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(402,"invalid object id");
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json(new ApiResponse(200,{},"product deleted"))
    } catch (error) {
        throw new ApiError(505,"server error in delete product")
    }
})


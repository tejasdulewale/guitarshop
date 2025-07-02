import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
	productname:{
		type:String,
		required:true,
	},
	productimage:{
		type:String,
		required:true,
	},
	productprice:{
		type:Number,
		required:true,
	},
	productdescription:{
		type:String,
		required:true
	},
	productdecprice:{
		type:Number,
		default:0
	},
	bgColor:{
		type:String,
	},
	fontColor:{
		type:String,
	},
})

const productModel = mongoose.model("product",productSchema)

export default productModel
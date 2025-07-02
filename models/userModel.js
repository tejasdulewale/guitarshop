
import mongoose from "mongoose"



const userSchema= new mongoose.Schema({
	username:{
		type:String,
		minLength:3,
		maxLength:20,
		required:true
		},
	email:{
		type:String,
		required:true,
		},
	password: {
		type:String,
		required:true,
		},
	phoneNumber: {
		type:Number,
		required:true,
		},
	address:{
		type:String,
		required:true,
		},
	// cart:{
	// 	type:Array,
	// 	default:[]
	// },
	// products:{
	// 	type:Array,
	// 	default:[]
	// },
		// isAdmin:{
		// 	type:Boolean,
		// 	default:false
		// }

})


const userModel = mongoose.model("user",userSchema)

export default userModel
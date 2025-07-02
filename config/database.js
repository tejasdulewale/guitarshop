import mongoose from 'mongoose'

const connection = ()=>{
	mongoose.connect(process.env.DB_URL).then(()=>{
		console.log("connect to db");

	}).catch((err)=>{
		console.log("something went wrong",err);

	})
}

export default connection
import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import connection from './config/database.js'
import ownerRoutes from './routes/ownerRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app = express()
const port = process.env.PORT || 3000

connection()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/owner",ownerRoutes)
app.use("/user",userRoutes)



app.get('/',(req,res)=>{
	res.send("server is running")
})

app.listen(port,()=>{
	console.log(`http://localhost:${port}`);

})

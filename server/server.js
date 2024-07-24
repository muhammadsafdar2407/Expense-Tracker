import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

const PORT=4000;
const app= express();

app.use(cors())

await mongoose.connect("mongodb+srv://muhammadsafdar2407:abc123xyz@cluster0.eyzghca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
console.log("MongoDB Connection is Succesful")

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server running on Port `+PORT)
})
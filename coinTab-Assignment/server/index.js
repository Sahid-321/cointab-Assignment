const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const PORT = 8080;

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/userdetails",()=>{
    console.log("mongoDB connected");
})

const mongoSchema = mongoose.Schema({
    name: String,
    gender: String
})

const User = mongoose.model("user", mongoSchema);

app.post('/post', (req,res)=>{
    User.insertMany({
        name: "",
        gender:req.body.gender
    })
console.log(req.body.gender);
})

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})
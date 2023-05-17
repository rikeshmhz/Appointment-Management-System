const express =require("express")
const app=express() 
require('dotenv').config()//improting dot env packaage
require("./database/connection")
const testroute=require('./routes/testroute')
port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})
app.use(testroute)
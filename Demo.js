const registerUser=require('./registration');
const os = require('os');
const fs = require('fs');
const express=require('express');
function sayhello()
{
    console.log("hello,from nodejs");
}
sayhello();
const isexisting=registerUser.checkforuser();
if(isexisting){
    console.log("user is existing");
}
else{
registerUser.registerUser()
}

console.log(os.hostname());

fs.writeFile('./sample.txt','testing fs module',(err)=>{
    if(err){
        console.log("error occured");
        return
    }
    console.log("file created succesfully");
})
console.log()



const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req);
    res.send("Welcome to server.")
})
app.get('/hello',(req,res)=>{
    console.log(req)
    res.send("Hello boy.")
})

app.post('/saybye',(req,res)=>{
    console.log("post route");
    res.send("Post route");
})

app.post('/postdetails',(req,res)=>{
    console.log("post user details");
    res.send("post user details");
})
app.put('/updatedetails',(req,res)=>{
    res.send("updated user details successfully!")
})



app.listen(3000,()=>{
    console.log("your server is running.")
})
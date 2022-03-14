//loads environment variables
require('dotenv').config();
//requiring modules
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const encrypt=require("mongoose-encryption");
const md5=require("md5");


const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema= new mongoose.Schema({
    uname:String,
    password:String
});

//to encrypt passing one secret string
User.plugin(encrypt,{secret:process.env.SECRET, encryptedFields:["password"]});

const User=new mongoose.model("User",userSchema);

const Port=3000;
app.listen(Port,()=>{
    console.log(`Server running at port ${Port}`);
});

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",(req,res)=>{   
    const userName=req.body.username;
    const passWord=req.body.password;     
    User.findOne({uname:userName},(error,foundUser)=>{
        console.log("**0**");
        if(foundUser.username===userName){
            console.log(error);
            console.log(`The user ${req.body.username} exists try another name.`);
            res.render("register");            
        }else{
        const newUser=new User({
          uname:userName,
          password:passWord
           });
           console.log("**1**");
           newUser.save((error)=>{
               if(error){
                   console.log(error);
                   res.render("register");
                   console.log("**2**");
               }else{
                console.log("**3**");
                    res.render("secrets");
               }
           });   
        }
    });                      
});

app.post("/login",(req,res)=>{        
    const userName=req.body.username;
    const password=req.body.username;
    User.findOne({uname:userName},(error,foundUser)=>{
        if(error){
            console.log(error);
            res.render("register");
        }else{
            if(foundUser){
                if(foundUser.password===password){
                    res.render("secrets");      
                }else{
                    console.log("Wrong username or password");
                    res.render("register");
                }
            }else{
                console.log("The user does not exist!");
                    res.render("register");
            }
        }
    })
});
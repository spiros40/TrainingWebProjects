//loads environment variables
require('dotenv').config();
//requiring modules
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");


const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(session({
    secret:'key',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB");
//mongoose.set("useCreateIndex",true);

const userSchema= new mongoose.Schema({
    uname:String,
    password:String
});

userSchema.plugin(passportLocalMongoose);

const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const Port=3000;
app.listen(Port,()=>{
    console.log(`Server running at port ${Port}`);
});

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/secrets",(req,res)=>{
    if(req.isAuthenticate()){
        res.render("/secrets");
    }else{
        res.redirect("/login");
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/logout",(req,res)=>{
    req.logout();
    res.render("home");
});

app.post("/register",(req,res)=>{
    User.register({uname:req.body.uname},req.body.password,(error,user)=>{
        if(error){
            console.log(error);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.redirect("/secrets");
            });
        }
    });
});

app.post("/login",(req,res)=>{        
    const user=new User({
        uname:req.body.uname,
        password:req.body.password
    });
    req.login(user,(error)=>{
        if(error){
            console.log(error);
        }else{
            passport.authenticate("local")(req,res,()=>{
                res.redirect("/secrets");
            });
        }
    })
});
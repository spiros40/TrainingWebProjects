
//setting up modules
const express=require("express");
const app=express();
app.use(express.static("public"));

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const ejs=require("ejs");
app.set('view engine','ejs');

const serverPort=3000;

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB");
const articleSchema= new mongoose.Schema({
    title:String,
    content:String
});

const Article=new mongoose.model("Article", articleSchema);

//server code
app.listen(serverPort,()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
});

app.get("/articles",(req,res)=>{
    Article.find({},(error, result)=>{
        if(!error){
            res.send(result);
        }else{res.send(error);}

    });
});

app.post("/articles",(req,res)=>{
    let articleReq=req.body
    articleReq=new Article({
        title:articleReq.title,
        content:articleReq.content
    });
    articleReq.save((error)=>{
        if(!error){
            res.send("Successfull added");
        }else{res.send(error);}
    });
});

app.delete("/articles",(req,res)=>{
    
});

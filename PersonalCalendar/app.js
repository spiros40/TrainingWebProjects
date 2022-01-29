
//express init
const express=require("express");
const app=express();
//app.use(express.static("puplic"));
app.use(express.static("public"));
//server port initialization
const PORT =3000;
//body-parser package initialization
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
//ejs package initialization
const ejs =require("ejs");
app.set('view engine','ejs');

// import local librarys
const readText=require(__dirname+"/modules/readFromFile.js")



app.get("/",(req,res)=>{
    let textfromfile=readText.readFromFile("text1.txt");
    
    res.render("main",{title:"Home",text:textfromfile});
});
app.get("/about",(req,res)=>{
    let textfromfile=readText.readFromFile("text1.txt");
    
    res.render("main",{title:"About",text:textfromfile});
});
app.get("/contactUs",(req,res)=>{
    let textfromfile=readText.readFromFile("text1.txt");
    
    res.render("main",{title:"Contact us",text:textfromfile});
});
app.get("/compose",(req,res)=>{
        
    res.render("main",{title:"Compose",text:textfromfile});
});



app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});




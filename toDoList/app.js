const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");
const PORT = 3000;

const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let items=["Buy food","Cook food","Eat food"];
let workItems=[];

app.get("/",(req, res)=>{
   let day=date.getDate();
   res.render('list',{listTitle: day, newItemList:items, postTo:"/"});
});

app.get("/work",(req,res)=>{    
    res.render( 'list', {listTitle:"Work List",newItemList:workItems, postTo:"/work"});
});

app.post("/work",(req,res)=>{
    let item=req.body.newitem;
    workItems.push(item);
    res.redirect("/work");
})

app.post("/",(req,res)=>{
   let item=req.body.newitem;
    items.push(item);
    res.redirect("/");
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
});



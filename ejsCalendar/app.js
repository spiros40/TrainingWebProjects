//jshint esversion:6

const express = require("express");
//const mongose=require("mongoose");
const { default: mongoose } = require("mongoose");
//parses objects
const bodyParser = require("body-parser");
const ejs = require("ejs");
//utility library
const lodash=require("lodash");
const PORT=3000;
//connect or create DB
mongoose.connect("mongodb://localhost:27017/ejsCalendarDB");

//schema
const PostedSchema=new mongoose.Schema({
    title:{
      type:String,
      required:[true, "Be carefull title is required!!"]
    },
    content:{
      type:String,
      required:[true, "Be carefull content is required!!"]
    }
});

const PostedContent=new mongoose.model("PostedContent",PostedSchema);

let contentArray=[];
const tempArray=[{title:"Nothing to view." , content:"There in nothing here go to compose page and enter!!"}];

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{

  PostedContent.find({},(error,contentItems)=>{
    if(!error||contentItems===!undefined){
      res.render("home",{contents_array:contentItems});
    }else{res.render("home",{contents_array:tempArray});}
  });
});

app.get("/about",(req,res)=>{
  res.render("about",{content:aboutContent});
});

app.get("/contact",(req,res)=>{
  res.render("contact",{content:contactContent});
});

app.get("/compose",(req,res)=>{
  res.render("compose");
});
app.post('/compose',(req,res)=>{
  //save new content to DB  
  newContent=new PostedContent({
    title:req.body.title,
    content:req.body.content
  });
  newContent.save();

  res.redirect("/");
});

//open the post 
app.get("/posts/:postID",(req,res)=>{
  let contentTitle=req.params.postID;
  PostedContent.findOne({title:contentTitle},(error,findedCOntent)=>{
    if(!error){
      res.render("post",{con_title:findedCOntent.title, con_content:findedCOntent.content});
    }else{res.redirect("/");}
  });
});

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});


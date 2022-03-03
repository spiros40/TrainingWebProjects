
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
mongoose.connect("mongodb://localhost:27017/smallApiDB");
const articleSchema= new mongoose.Schema({
    title:String,
    content:String
});

const Article=new mongoose.model("Article", articleSchema);

//server code
app.listen(serverPort,()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
});

/* 
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
    let articleToDelete=req.body.title;
    Article.findByIdAndRemove(articleToDelete,(error)=>{
        if(!error){
            res.send("Artticle removed successfully!");
        }else{res.send("Something went wrong" + error);}
   });
// or delete many
//    Article.deleteMany((error)=>{
//     if(!error){
//         res.send("Artticle removed successfully!");
//     }else{res.send("Something went wrong" + error);}
//     });
});
*/

//multiple articles handle
app.route("/articles")
    .get((req,res)=>{
        Article.find({},(error, result)=>{
            if(!error){
                res.send(result);
            }else{res.send(error);}
        });
    })
    .post((req,res)=>{        
        const newArticleReq=new Article({
            title:req.body.title,
            content:req.body.content
        });
        newArticleReq.save((error)=>{
            if(!error){
                res.send("Successfull added");
            }else{res.send(error);}
        });
    })
    .delete((req,res)=>{        
        Article.deleteMany(articleToDelete,(error)=>{
            if(!error){
                res.send("Artticle removed successfully!");
            }else{res.send("Something went wrong" + error);}
       });
    // or delete many
    //    Article.deleteMany((error)=>{
    });

    //specify articles handle
app.route("/article/:articleTitle")
.get((req,res)=>{    
    Article.findOne({title:req.params.articleTitle},(error, result)=>{
        if(!error){
            res.send(result);
        }else{res.send(error);}
    });
})
.put((req,res)=>{
    Article.update({title:req.params.articleTitle},
        {title:req.body.title,
        content:req.body.content},
    {overwrite:true},
    ()=>{if(!error){
            res.send("Article updated.");
        }else{res.send("Something went wrong" + error);}
    });
})
.delete((req,res)=>{
    let articleToDelete=req.body.title;
    Article.findByIdAndRemove(articleToDelete,(error)=>{
        if(!error){
            res.send("Artticle removed successfully!");
        }else{res.send("Something went wrong" + error);}
   });
// or delete many
//    Article.deleteMany((error)=>{
});
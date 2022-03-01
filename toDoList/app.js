const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");
const mongose=require("mongoose");
const { default: mongoose } = require("mongoose");
const PORT = 3000;

mongose.connect("mongodb://localhost:27017/toDoListDB");

//item schema
const itemsSchema=new mongose.Schema({
    name:{
       type:String,
        required:[true, "Be carefull name is required!!"]
    }
});
const Item=new mongoose.model("Item",itemsSchema);

//list schema
const listSchema=new mongoose.Schema ({
    name:String,
    items:[itemsSchema]
});
const List= new mongoose.model("List",listSchema);

const app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));



const item1=new Item({
    name:"Buy nice food"
});
const item2=new Item({
    name:"Cook food"
});
const item3=new Item({
    name:"Eat food"
});
const itemArray=[item1,item2,item3];

// Item.insertMany([item1,item2,item3],(error,docs)=>{
//     if(error){
//         console.log(error);
//     }else{console.log("items saved");}
// });

// Item.find((error,items)=>{
//     if(error){
//         console.log(error);
//     }else{items.forEach(element=>{
//         workItems.push(element.name);   
//         console.log(workItems);
//         // mongoose.connection.close();
//     })};
// });

app.get("/",(req, res)=>{
   let day=date.getDate();

   Item.find({},(error,listitems)=>{
    res.render('list',{listTitle: day, newItemList:listitems, postTo:"/"});
   });
});

// app.get("/work",(req,res)=>{    
//     res.render( 'list', {listTitle:"Work List",newItemList:workItems, postTo:"/work"});
// });

//dynamic express route
app.get("/:listId",(req,res)=>{
    let listName=req.params.listId;
    List.findOne({name:listName},(error,result)=>{
        if(!error){            
            if(!result){
                    const list=new List({
                    name:listName,
                    items:itemArray
                });
                list.save();
                console.log("The list stored.");
            }else{       
                Item.find({},(error,listitems)=>{
                    res.render('list',{listTitle: listName, newItemList:listitems, postTo:"/" + listName});
                    console.log("The list exist!!");
                   });
            }                             
        }else{console.log(error);}
    });
    
    //res.redirect("/" + listName);  
});

// app.post("/work",(req,res)=>{
//     let item=req.body.newitem;
//     workItems.push(item);
//     res.redirect("/work");
// })

//adds a new todo item to database
app.post("/",(req,res)=>{
    let itemName=req.body.newitem;
    const listName=req.body.list;

    itemName=new Item({
        name:itemName
     });
    itemName.save();
    
    res.redirect("/"+listName);
});


app.post("/delete",(req,res)=>{
    let itemToDelete=req.body.checkbox;
    
    Item.findByIdAndRemove(itemToDelete,(error)=>{    
                if(error){
                    console.log(error);
                }else{
                    console.log("Deleted succesfully")
                }
            });
            
    res.redirect("/");        
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
});



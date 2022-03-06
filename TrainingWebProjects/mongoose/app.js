const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//fruit schema 
const fruitSchema=new mongoose.Schema({
    //validate data 
    name:{
        type:String,
        required:[true, "Be carefull name is required!!"]
    },
    score:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit=mongoose.model("Fruit",fruitSchema);


// const apricot=new Fruit({
//     name:"Apricot",
//     score:8,
//     review:"Superspecial"
// });
//apricot.save();



// Fruit.updateOne({_id:"6210c79641ac702ad1460d52"},{name:"apricot"},(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Updated succesfully")
//     }
// });

//  Fruit.deleteOne({_id:"6210c79641ac702ad1460d52"},(error)=>{
//      or
// Fruit.deleteOne({name:"Apricot"},(error)=>{    
//         if(error){
//             console.log(error);
//         }else{
//             console.log("Deleted succesfully")
//         }
//     });

 


//pineapple.save();
// save for one test.save();

// const orange=new Fruit({
//     name:"Orange",
//     score:7,
//     review:"ok"
// });
// const banana=new Fruit({
//     name:"Banana",
//     score:8,
//     review:"very good"
// });

// const fruitArr=[{name:"Kiwi"},{name:"Orange"},{name:"Banana"}];

// Fruit.insertMany([kiwi,orange,banana], function(error,docs){
//     if(error){
//         console.log(error);
//     }else{console.log("succesfull saved")};
// });

Fruit.find((error,fruits)=>{
    if(error){
        console.log(error);
    }else{fruits.forEach(element=>{
        console.log(element.name);   
        // mongoose.connection.close();
    })};
});

//people schema
const peopleSchema=new mongoose.Schema({
    name:String,
    age:Number,
    //add relations with fruits
    favouriteFruit:fruitSchema
});
const People=mongoose.model("People",peopleSchema);

// const people=new People({
//     name:"Amy",
//     age:17,
//     favouriteFruit:apricot
// });
// people.save();

// People.deleteMany({name:"John", age:27},(error)=>{
//     if(error){
//          console.log(error);
//      }else{
//          console.log("Deleted succesfully")
//      }
//  });


// People.updateOne({name:"John"},{favouriteFruit:apricot},(error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Updated succesfully")
//     }
// });

console.log("command executed");
//mongoose.connection.close();
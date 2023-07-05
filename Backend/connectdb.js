// // const mongoose = require('mongoose')

// // const connectDB = async (DBURL) => {
// //     try {
// //         await mongoose.connect(DBURL);
// //         const foodCollection = await mongoose.connection.db.collection("food_catagory");
// //         // console.log(foodCollection);
// //         // // await foodCollection.find({}).toArray(function(err, data) {
// //         // //     if (err) console.log(err)
// //         // //     else console.log(data)
// //         // // })
// //         // const cursor = foodCollection.find();
// //         // console.log(cursor);
// //         console.log("Connected Successfully");

// //     } catch (err) {
// //         console.log(err);
// //     }
// //     // const foodCollection = await mongoose.connection.db.collection("food_catagory");
// //     //     foodCollection.find({}).toArray(function(err, data) {
// //     //         if (err) console.log(err)
// //     //         else console.log(data)
// //     // })
// // }
// // // const getAllDocs = async () => {
// // //     try {

// // //         console.log("Connected Successfully");

// // //     } catch (err) {
// // //         console.log(err);
// // //     }
// // // }


// // module.exports = connectDB


// const mongoose = require('mongoose')
// const mongoURI = 'mongodb://127.0.0.1:27017/foodbank'
// const connectDB=()=>{
//     mongoose.connect(mongoURI,  async (err, result) => {
//         if (err) console.log(err)
//         else {
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             // foodCollection.find({}).toArray(async function (err, data) {
//             //     if(err) console.log(err)
//             //     else console.log(data)
//             //     // const categoryCollection = await mongoose.connection.db.collection("Categories");
//             //     // categoryCollection.find({}).toArray(async function (err, Catdata) {
//             //     //     callback(err, data, Catdata);

//             //     // })
//             // });
//         }
//     })
// };
// const mongoose= require("mongoose");
// const connectDB = async () => { 
// mongoose.connect("mongodb://localhost:27017/foodbank")
// .then( () => console.log("connection Establish successfully......."))
// .catch( (err) => console.log("err"));
// }
const mongoose= require("mongoose");
const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/foodbank')
      const foodCollection1= await mongoose.connection.db.collection("food_data");
      const data1=await foodCollection1.find().toArray();
      const foodCollection2= await mongoose.connection.db.collection("food_catagory");
      const cdata=await foodCollection2.find().toArray();
      global.food_data=data1;
      global.food_catagory=cdata;
      console.info(`Connected to database `)
  } catch (error) {
      console.error(error)
      process.exit(1)
  }
}
module.exports=connectDB


// const { MongoClient } = require("mongodb");
// const uri =process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/foodbank";
// const client = new MongoClient(uri);
// async function connectDB() {
//   try {
//     await client.connect();
//     const db = client.db("foodbank");
//     const coll = db.collection("food_data");
//     const cursor = coll.find();
//     const data=await cursor.toArray();
//     const coll2 = db.collection("food_catagory");
//     const cursor2 = coll2.find();
//     const cdata=await cursor2.toArray();
//     global.food_data=data;
//     global.food_catagory=cdata;
//     console.log("Connected Succefully")
//   } catch(err) {
//     await console.log(err);
//   }
// }
// module.exports=connectDB

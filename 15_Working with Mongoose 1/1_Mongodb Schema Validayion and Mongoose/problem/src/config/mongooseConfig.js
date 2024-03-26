// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose"
export const connectUsingMongoose = async () => {
  // write your code here
  try{
  await mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongodb connected using Mongoose");
}catch (err) {
  console.log("Error while connecting to db");
  console.log(err);
}
};

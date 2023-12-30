const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://sahilsinghiscool:sahilsinghcool@cluster0.ygxdamb.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const collection = mongoose.connection.db.collection("food_items");
    const data = await collection.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to be handled by the caller if needed
  }
};

module.exports = mongoDB;

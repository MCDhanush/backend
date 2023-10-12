const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://dhanushmc93:KHbRaPqQUNqS48A9@cluster0.xjm8on6.mongodb.net";

//   approach 1
// const mongoDB = async () => {
//   await mongoose.connect(mongoURL);
//   console.log("Connected to MongoDB");
// };

// mongoose upto 7 version it doesn't --
// support callback so we have to use .then or change mongoose version to 6.10.0

// approach2
// const mongoDB = async () => {
//   await mongoose.connect(mongoURL, () => {
//     console.log("Connected to MongoDB");
//   });
// };

// approach 3
const mongoDB = async () => {
  await mongoose.connect(
    mongoURL,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("...", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodcategory = await mongoose.connection.db.collection(
            "foodcategory"
          );
          foodcategory.find({}).toArray(async function (err, catdata) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodcategory = catdata;
              // console.log(global.food_items);
            }
          });
        });
      }
    }
  );
};

module.exports = mongoDB;

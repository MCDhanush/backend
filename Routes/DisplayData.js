const express = require("express");
// const { route } = require("./Createuser");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    // console.log(global.food_items);
    res.send([global.food_items, global.foodcategory]);
  } catch (err) {
    console.error(err.message);
    res.send("Server error");
  }
});

module.exports = router;

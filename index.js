const express = require("express");
const app = express();
const PORT = 4001;
const mongoDB = require("../backend/db");
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.use(express.json());
app.use("/api", require("./Routes/Createuser.js"));
app.use("/api", require("./Routes/DisplayData.js"));
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

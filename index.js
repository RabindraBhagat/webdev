import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to my web development project !!" });
});

app.listen(3000, () => {
  console.log("running at port 3000");
});

// this is an new exciting feature we have added in our application
// sddsfsdf

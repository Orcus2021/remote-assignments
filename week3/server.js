const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/myName", (req, res) => {
  if (req.cookies.name) {
    res.send(`${req.cookies.name},Welcome!`);
  } else {
    res.sendFile(path.join(__dirname, "public/name.html"));
  }
});
app.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("name", name).send({ message: "Success" });
});

app.get("/getData", (req, res) => {
  const { number } = req.query;

  let result = 0;

  if (number === "") {
    res.send({ message: "Lack of Parameter" });
  } else if (!isNaN(number)) {
    const num = +number;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    res.send({ message: result });
  } else if (number === "正整數") {
    res.send({ message: "1+2+....+正整數" });
  } else if (typeof number === "string") {
    res.send({ message: "Wrong Parameter" });
  } else {
    res.send("Lack of Parameter");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Register";
  res.render("register", { title });
});

router.post("/", (req, res) => {
  let file = fs.readFileSync("./db/users.json");
  const users = JSON.parse(file);
  const passwordHash = bcrypt.hashSync(req.body.password, 10);
  users.push({
    //add data to json file
    id: users[users.length - 1].id + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    username: req.body.username,
    password: passwordHash,
  });
  //logsin user
  req.session.isLogedInn = true;
  req.session.user = users[users.length-1];
  file = JSON.stringify(users);
  fs.writeFile("./db/users.json", file, (err) => {
    // error checking
    if (err) throw err;
  });
  res.redirect("/");
});

export { router };

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Login";
  res.render("login", { title });
});

router.post("/", (req, res) => {
  const file = fs.readFileSync("./db/users.json");
  const users = JSON.parse(file);
  const title = "Login";
  for (let i = 0; i < users.length; i++) {
    if (req.body.identifier == users[i].username || req.body.identifier == users[i].email){
      console.log("hi")
      if(bcrypt.compareSync(req.body.password, users[i].password)){
        res.redirect("/");
        return
      } 
    }
    else{
      res.render("login", { title });
      return
    }  
  }
});

export { router };

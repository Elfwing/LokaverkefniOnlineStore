import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import fs from "fs";

const router = express.Router();


router.get("/", (req, res) => {
  const file = fs.readFileSync("./db/users.json");
  const users = JSON.parse(file);
  req.session.user = undefined;
  req.session.itemsInCart = undefined;
  req.session.isLogedInn = false;
  res.redirect("/");
});

export { router };

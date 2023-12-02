import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "W&WE";
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  const isLogedInn = req.session.isLogedInn
  let categorys = new Set()
  for (let i = 0; i < items.length; i++){
    categorys.add(items[i].category)
  }
  res.render("index", { title, items, categorys, isLogedInn});
});

export { router };

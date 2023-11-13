import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Album";
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  let categorys = new Set()
  for (let i = 0; i < items.length; i++){
    categorys.add(items[i].category)
  }
  res.render("index", { title, items, categorys});
});

export { router };

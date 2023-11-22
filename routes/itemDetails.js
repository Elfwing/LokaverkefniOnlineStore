import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  let categorys = new Set()
  for (let i = 0; i < items.length; i++){
    categorys.add(items[i].category)
  }
  const title = "Sam";
  res.render("itemDetails", { title, categorys });
});

export { router };

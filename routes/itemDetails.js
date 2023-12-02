import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const itemName = req.query.itemName;
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  const isLogedInn = req.session.isLogedInn
  let itemShown;
  let categorys = new Set();
  for (let i = 0; i < items.length; i++) {
    if (itemName == items[i].itemName) {
      itemShown = items[i];
    }
  }
  const title = itemShown.name;
  res.render("itemDetails", { title, itemShown, categorys, isLogedInn });
});

export { router };

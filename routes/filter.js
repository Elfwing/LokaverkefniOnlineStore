import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const categoryFilter = req.query.type;
  const title = categoryFilter;
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  let categorys = new Set();
  const filtered = [];
  for (let i = 0; i < items.length; i++) {
    categorys.add(items[i].category);
    if (items[i].category == categoryFilter) {
      filtered.push(items[i]);
    }
  }

  res.render("filter", { title, filtered, categorys });
});

export { router };

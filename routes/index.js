import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Album";
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  res.render("index", { title, items });
});

export { router };

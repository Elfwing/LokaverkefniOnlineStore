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

router.post("/", (req, res) => {
  const quantity = +req.body.quantity;
  const itemName = req.query.itemName;
  if (!req.session.itemsInCart){
    let itemlist = new Object();
    req.session.itemsInCart = itemlist;
  }
  if (itemName in req.session.itemsInCart){
    req.session.itemsInCart[itemName] += quantity;
  } else {
    req.session.itemsInCart[itemName] = quantity;
  }
  
  console.log(req.session.itemsInCart)
  res.redirect("/");
});


export { router };

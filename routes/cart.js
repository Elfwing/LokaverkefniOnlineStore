import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Check Out";
  const file = fs.readFileSync("./db/items.json");
  const items = JSON.parse(file);
  const isLogedInn = req.session.isLogedInn;
  const user = req.session.user;
  const cart = req.session.itemsInCart;
  let itemsInCart = [];
  let categorys = new Set();
  for (let i = 0; i < items.length; i++) {
    categorys.add(items[i].category);
    if (cart) {
      if (items[i].itemName in cart) {
        itemsInCart.push(items[i]);
      }
    }
  }
  res.render("cart", { title, categorys, isLogedInn, itemsInCart, cart, user});
});

export { router };

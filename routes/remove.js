import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import fs from "fs";

const router = express.Router();

router.post("/", (req, res) => {
  //remove item from cart
  let itemsInCart = req.session.itemsInCart;
  const itemRemove = req.query.itemRemove;
  delete itemsInCart[itemRemove];
  res.redirect("/cart");
});

export { router };

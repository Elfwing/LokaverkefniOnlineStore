import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Register";
  res.render("register", { title });
});

export { router };

// controllers/colorsController.js
const express = require("express");
const colors = express.Router();
const { getAllColors } = require("../queries/color");


// INDEX
colors.get("/", async (req, res) => {
    const allColors = await getAllColors();
    if (allColors[0]) {
      res.status(200).json(allColors);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });



module.exports = colors;

//Note: When making configuration changes, shut down your server entirely and start again. Configuration changes are often not tracked/reset with nodemon.
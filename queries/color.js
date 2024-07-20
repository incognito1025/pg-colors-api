// queries/color.js
const db = require("../db/dbConfig.js");

const getAllColors = async () => {
    try {
      const allColors = await db.any("SELECT * FROM colors");
      return allColors;
    } catch (error) {
      return error;
    }
  };




//SHOW ROUTE - one color
const getColor = async (id) => {
  try {
    const oneColor = await db.one("SELECT * FROM colors WHERE id=$[id]", {
      id: id,
    });
    return oneColor;
  } catch (error) {
    return error;
  }
};


// queries/color.js
// CREATE Route
const createColor = async (color) => {
  try {
    const newColor = await db.one(
      "INSERT INTO colors (name, is_favorite) VALUES($1, $2) RETURNING *",
      [color.name, color.is_favorite]
    );
    return newColor;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllColors,
  createColor,
  getColor,
};
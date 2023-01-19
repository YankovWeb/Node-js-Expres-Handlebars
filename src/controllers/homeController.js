const db = require("../db.json");

exports.getHomePage = (req, res) => {
  const {search, from: difficultyForm, to: difficultyTo} = req.query;
  let cubes = db.cubes;
  if (search) {
    cubes = cubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (difficultyForm) {
    cubes = cubes.filter((cube) => cube.difficultyLevel >= difficultyForm);
  }
  if (difficultyTo) {
    cubes = cubes.filter((cube) => cube.difficultyLevel <= difficultyTo);
  }

  res.render("index", {cubes, search, difficultyForm, difficultyTo});
};
exports.getAboutPage = (req, res) => {
  res.render("about");
};
exports.getErrorPage = (req, res) => {
  res.render("404");
};

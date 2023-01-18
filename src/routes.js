const router = require("express").Router();
const cubeController = require("./controllers/cubController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

// app.get("/create", (req, res) => {
//   res.render("create");
// });
router.get("./create", cubeController.getCreateCube);

module.exports = router;

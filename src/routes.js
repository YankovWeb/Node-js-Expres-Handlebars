const router = require("express").Router();

const cubeController = require("./controllers/cubController");
const homeCotnroller = require("./controllers/homeController");

router.get("/", homeCotnroller.getHomePage);
router.get("/about", homeCotnroller.getAboutPage);
router.get("/create", cubeController.getCreateCube);
router.post("/create", cubeController.postCreateCube);

module.exports = router;

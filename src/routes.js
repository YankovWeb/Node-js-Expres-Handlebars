const router = require("express").Router();

const cubeController = require("./controllers/cubController");
const homeCotnroller = require("./controllers/homeController");

router.get("/", homeCotnroller.getHomePage);
router.get("/about", homeCotnroller.getAboutPage);
router.get("./404", homeCotnroller.getErrorPage);

router.get("/create", cubeController.getCreateCube);
router.post("/create", cubeController.postCreateCube);
router.get("/details/:cubeID", cubeController.getDetails);
module.exports = router;

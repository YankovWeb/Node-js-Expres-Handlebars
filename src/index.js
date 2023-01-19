const express = require("express");
const router = require("./routes");
const config = require("./config/config");

const app = express();
require("./config/viewEngine")(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(config.PORT, () =>
  console.log(`Server is running on port ${config.PORT}...`)
);

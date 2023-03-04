const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT, FLIGHT_SERVICE_PATH } = require("./config/serverConfig");

const apiRoutes = require("./routes/index");

const db = require("./models/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`BookingService server started at port ${PORT}`);
    console.log(FLIGHT_SERVICE_PATH);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();

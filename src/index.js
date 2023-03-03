const express = require("express");
const app = express();

const PORT = 3002;

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`BookingService server started at port ${PORT}`);
  });
};

setupAndStartServer();

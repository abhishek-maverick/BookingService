const { BookingService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    return res.status(StatusCodes.OK).json({
      message: "Successfully completed booking",
      success: true,
      error: {},
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
      success: false,
      error: error.explanation,
      data: {},
    });
  }
};

module.exports = {
  create,
};

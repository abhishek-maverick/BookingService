const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models/index");
const { ValidationError, AppError } = require("../utils/errors");

class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name === "SequlizeValidationError") {
        throw new ValidationError(error);
      }

      throw new AppError(
        "RepositoryError",
        "Cannot create booking",
        "There was come issue creating the booking, please try again later",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(data) {}
}

module.exports = BookingRepository;

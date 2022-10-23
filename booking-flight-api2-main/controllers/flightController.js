const Flights = require("../models/Flight");
const { v4: uuid } = require("uuid");

///get all flights
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    if (!(flights.length > 0))
      return res.status(404).json({
        status: "fail",
        message: "No flight booked yet",
      });

    res.status(200).json({
      status: "success",
      message: "All flights",
      count: flights.length,
      flights: flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
//get single flight
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    if (!(flights.length > 0))
      return res.status(404).json({
        status: "fail",
        message: "No flight found",
      });
    res.status(200).json({
      status: "success",
      message: "Booked Flight",
      flight,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// create new flight

exports.createFlight = async (req, res) => {
  try {
    const { title, price } = await req.body;

    const newFlight = {
      id: uuid(),
      title,
      price,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    Flights.push(newFlight);

    res.status(201).json({
      status: "success",
      message: "Flight booked successfully",
      newFlight,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//Update or edit flights

exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    if (!(flight.length > 0)) return res.status(404).json({ status: "fail", message: "No flight found"});

    const { title, price } = await req.body;

    flight.title = title;
    flight.price = price;
    res.status(200).json({
      message: "Flight updated",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

//delete flight

exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    Flights.splice(Flights.indexOf(flight), 1);
    res.status(204).json({
        status: "success",
      message: "Flight booked has been deleted",
      data: null,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

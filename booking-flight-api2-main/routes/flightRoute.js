const router = require ('express').Router();
const Flightcontroller = require("../controllers/flightController");

router
.get("/", Flightcontroller.getFlights)
.get("/:id", Flightcontroller.getFlight)
.post("/", Flightcontroller.createFlight)
.put("/:id", Flightcontroller.updateFlight)
.delete("/:id", Flightcontroller.deleteFlight);


module.exports = router;
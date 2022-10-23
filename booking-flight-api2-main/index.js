const express = require("express");
const { json } = require("express");
const flight = require("./routes/flightRoute");
const app = express();
const PORT = process.env.PORT || 6000;


app.use(json());
app.use("/flight", flight);


app.get("/", (req, res) => {
  res.send("Welcome to my Flight Booking Center!");
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));

const express = require("express");
const path = require("path");
const app = express();
const data = require("./data.json");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
//ticket created
app.get("/", (req, res) => {
  if (data) {
    const createdBy = data.created_By;
    const updatedBy = data.updated_By;
    const engineNo = data.engine_no;
    const depotNo = data.depot_no;
    res.render("home.ejs", {
      ticketCreated: createdBy,
      ticketUpdated: updatedBy,
      engineNumber: engineNo,
      depotNumber: depotNo,
    });
  }
});

//starting the server
app.listen(4000, (req, res) => {
  console.log("server is started");
});

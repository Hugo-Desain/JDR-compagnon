module.exports = app => {
    const sheets = require("../controllers/sheet.controller");
  
    var router = require("express").Router();
  
    // Create a new Sheet
    router.post("/", sheets.create);
  
    // Retrieve all Sheets
    router.get("/", sheets.findAll);
  
    // Retrieve a single Sheet with id
    router.get("/:id", sheets.findOne);
  
    // Update a Sheet with id
    router.put("/:id", sheets.update);
  
    // Delete a Sheet with id
    router.delete("/:id", sheets.delete);

    app.use('/api/sheets', router);
  };
module.exports = app => {
    const origin = require("../controllers/origin.controller");

    var router = require("express").Router();

    // Create a new Origin
    router.post("/", origin.create);

    // Retrieve all origins
    router.get("/", origin.findAll);

    // Retrieve a single Origin with id
    router.get("/:id", origin.findOne);

    //Retrieve all origins for a type
    router.get("/type/:type",origin.findByType )

    // Update a Origin with id
    router.put("/:id", origin.update);

    // Delete a Origin with id
    router.delete("/:id", origin.delete);

    app.use('/api/origins', router);
};
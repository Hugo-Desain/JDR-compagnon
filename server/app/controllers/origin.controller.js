const db = require("../models");
const Origin = db.origins;

// Create and Save a new Origin
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create an Origin
    const origin = new Origin({
        name: req.body.name,
        type: req.body.type,
    });

    // Save Origin in the database
    origin
        .save(origin)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Origin.",
            });
        });
};

// Retrieve all Origins from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name
        ? { name: { $regex: new RegExp(name), $options: "i" } }
        : {};

    Origin.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Origins.",
            });
        });
};

// Find a single Origin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Origin.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({ message: "Not found Origin with id " + id });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({ message: "Error retrieving Origin with id=" + id });
        });
};
// Find all Origins of a single type
exports.findByType = (req, res) => {
    const type = req.params.type;
    const condition = type ? {type: type} : {};

    Origin.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Origins.",
            });
        });
}

// Update a Origin by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!",
        });
    }

    const id = req.params.id;

    Origin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Origin with id=${id}. Maybe Origin was not found!`,
                });
            } else res.send({ message: "Origin was updated successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Origin with id=" + id,
            });
        });
};

// Delete a Origin with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Origin.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Origin with id=${id}. Maybe Origin was not found!`,
                });
            } else {
                res.send({
                    message: "Origin was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Origin with id=" + id,
            });
        });
};

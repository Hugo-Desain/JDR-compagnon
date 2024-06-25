const db = require("../models");
const Sheet = db.sheets;

// Create and Save a new Sheet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Sheet
  const sheet = new Sheet({
    name: req.body.name,
    type: req.body.type,
    user: req.body.user,
    level: req.body.level,
    origin: req.body.origin,
    classe: req.body.classe,
    description: req.body.description,
  });

  // Save Sheet in the database
  sheet
    .save(sheet)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Sheet.",
      });
    });
};

// Retrieve all Sheets from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Sheet.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Sheets.",
      });
    });
};

// Find a single Sheet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sheet.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Sheet with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Sheet with id=" + id });
    });
};

// Update a Sheet by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Sheet.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sheet with id=${id}. Maybe Sheet was not found!`,
        });
      } else res.send({ message: "Sheet was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Sheet with id=" + id,
      });
    });
};

// Delete a Sheet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Sheet.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sheet with id=${id}. Maybe Sheet was not found!`,
        });
      } else {
        res.send({
          message: "Sheet was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Sheet with id=" + id,
      });
    });
};

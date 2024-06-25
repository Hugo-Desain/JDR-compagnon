module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    name: String,
    type: String,
    user: String,
    level: Number,
    origin: String,
    classe: String,
    description: String,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Sheet = mongoose.model("sheet", schema);
  return Sheet;
};

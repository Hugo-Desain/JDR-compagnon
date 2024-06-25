module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    system: String,
    name: String,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Classe = mongoose.model("classe", schema);
  return Classe;
};

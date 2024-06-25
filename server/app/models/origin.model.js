module.exports = (mongoose) => {
    var schema = mongoose.Schema({
        name: String,
        type: String,
    });

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    let Origin;
    Origin = mongoose.model("origin", schema);
    return Origin;
};

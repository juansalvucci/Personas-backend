const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = Schema(
  {
    nombre_apellido: { type: String },
    fecha_nacimmiento: { type: String },
    ciudad: { type: String },
    email: { type: String },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

module.exports = mongoose.model("Personas", PersonSchema);

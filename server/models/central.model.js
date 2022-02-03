const mongoose = require("mongoose");

const PlantasSchema = new mongoose.Schema({
	NUM: Number,
	numberApplication: String,
    codeServices: String,
    MADRE: String,
	RAZON: String,
	numero_de_proyecto: String,
    Comuna: String,
	Region: String,
    n_puerta_sw2924: String,
	observacion: String,
    CABLEFO: String,
	FO1: Number,
});

const PlantasModel = mongoose.model("centrales", PlantasSchema);

module.exports = PlantasModel;
const PlantasModel = require("../models/central.model");

/*const crearPlantas = async (req, res) => {
  try {
    const { nombre, tipo, descripcion, skill1, skill2, skill3 } = req.body;
    const plantas = await PlantasModel.create({
      nombre: nombre,
      tipo: tipo,
      descripcion: descripcion,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
    }).then(() => res.json({ msj: "Mascota guardada con exito" }));
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};*/

const obtenerPlantas = async (req, res) => {
  try {
    const plantas = await PlantasModel.find();
    res.json(plantas);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const updateMascota = async (req, res) => {
  await PlantasModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((plantas) => res.json(plantas))
    .catch((err) => res - json(err));
};

const eliminarMascota = async (req, res) => {
  await PlantasModel.deleteOne({ _id: req.params.id })
    .then((deletedMascota) => res.json(deletedMascota))
    .catch((err) => res.json(err));
};

const obtenerUnaPlanta = async (req, res) => {
  try {
    await PlantasModel.findOne({
      _id: req.params.id,
    }).then((plantas) => res.json(plantas));
  } catch (err) {
    console.log(err);
  }
}; 

module.exports = {
  /*crearMascotas,*/
  obtenerPlantas,
  updateMascota,
  eliminarMascota,
  obtenerUnaPlanta,
};

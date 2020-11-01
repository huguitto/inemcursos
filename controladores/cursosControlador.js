//los controlodaores son lo sque mandan en el cotarro

//importamos el modelo de datos
const Cursos = require("../modelos/Cursos.js");

exports.nuevoCurso = async (req, res, next) => {
  //siempre porque vaya ser que el servidor se caiga justo a la hora de enviar
  const curso = new Cursos(req.body); //instancia do modelo

  try {
    await curso.save();
    res.status(204).json(); //esto hará que en el axios devuelva el proyecto
  } catch (error) {
    console.log("Hay un error en la funcion curso.save de cursosControlador");
    next();
  }
};
//obtenemos los cursos
exports.obtenerCursos = async (req, res, next) => {
  try {
    const cursos = await Cursos.find({});
    res.json(cursos);
  } catch (error) {
    console.log("Hay un error en obtenerCursos");
    next();
  }
};

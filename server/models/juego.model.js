module.exports = (sequelize, Sequelize) => {
  const Juego = sequelize.define("juego", {
    nombre: {
      type: Sequelize.STRING
    },
    subtitulo: {
      type: Sequelize.STRING
    },
    es_activo: {
      type: Sequelize.BOOLEAN
    }
  });

  return Juego;
};
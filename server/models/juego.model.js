module.exports = (sequelize, Sequelize) => {
  const Juego = sequelize.define("juego", {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    subtitulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    es_activo: {
      type: Sequelize.BOOLEAN
    }
  });

  return Juego;
};
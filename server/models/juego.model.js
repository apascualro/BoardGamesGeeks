
module.exports = (sequelize, DataTypes) => {
  const Juego = sequelize.define("juego", {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    es_activo: {
      type: DataTypes.TINYINT
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });

  return Juego;
};
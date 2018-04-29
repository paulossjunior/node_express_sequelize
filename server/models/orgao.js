'use strict';
module.exports = (sequelize, DataTypes) => {
  var Orgao = sequelize.define('Orgao', {
    nome: DataTypes.STRING
  }, {});
  Orgao.associate = function(models) {
    Orgao.hasMany(models.Concurso, {
      as: 'concursos',
      foreignKey: 'orgaoId'
    });
  };
  return Orgao;
};
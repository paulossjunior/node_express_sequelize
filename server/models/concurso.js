'use strict';
module.exports = (sequelize, DataTypes) => {
  var Concurso = sequelize.define('Concurso', {
    codigo: DataTypes.INTEGER
  }, {});
  Concurso.associate = function(models) {
    
    Concurso.belongsToMany(models.Profissao, {
      through: 'Concurso_Profissao',
      as: 'profissoes',
      foreignKey: 'concursoId',
    });
    // Um concurso pertence apenas a um orgão.
    Concurso.belongsTo(models.Orgao,{
      foreignKey: 'orgaoId',
      onDelete: 'CASCADE',
    });
    
  };
  return Concurso;
};
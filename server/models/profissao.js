'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profissao = sequelize.define('Profissao', {
    nome: DataTypes.STRING
  }, {});
  
  Profissao.associate = (models) =>{

    Profissao.belongsToMany(models.Candidato, {
      through: 'Candidato_Profissao',
      as: 'candidatos',
      foreignKey: 'profissaoId'
    });

    Profissao.belongsToMany(models.Concurso, {
      through: 'Concurso_Profissao',
      as: 'concursos',
      foreignKey: 'concursoId'
    });
    
  };
  return Profissao;
};
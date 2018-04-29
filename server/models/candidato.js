'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidato = sequelize.define('Candidato', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataNascimento: DataTypes.STRING
  }, {});

  Candidato.associate = (models) =>{
    /* Um Candidato pode ter um ou mais Profissoes que são iguais a outros candidatos. 
    
    */
    Candidato.belongsToMany(models.Profissao, {
      through: 'Candidato_Profissao',
      as: 'profissoes',
      foreignKey: 'candidatoId'
    });

  };

  return Candidato;
};
const Candidato = require('../models').Candidato;
const Profissao = require('../models').Profissao;
const Concurso = require('../models').Concurso;

module.exports = {
    
    list(req, res){
        return Candidato.all()
        .then(candidatos => res.status(201).send(candidatos))
        .catch(error => res.status(400).send(error));
    },
    list_find_all(req, res) {
        return Candidato
          .findAll({
            atributes: [Candidato.id, Candidato.nome, Profissao.nome],
            include: [{
              model: Profissao,
              as: 'profissoes',
            }],
          })
          .then(candidatos => res.status(200).send(candidatos))
          .catch(error => res.status(400).send(error));
      },
  concursos_valiados (req,res){
    return Candidato
          .findOne(
            { 
              where: {cpf: req.params.cpf},
              include: [{
                model: Profissao,
                as: 'profissoes',
                attributes: ['id','nome'],
                include: [{
                  model: Concurso,
                  as: 'concursos',
                  through: 'Candidato_Profissao',                                                                                                
                }],                                                                                                
              }],
              attributes: ['cpf']            
          } 
          )
          .then(candidatos => res.status(200).send(candidatos))
          .catch(error => res.status(400).send(error));
  },
};  
const Candidato = require('../models').Candidato;
const Profissao = require('../models').Profissao;

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
      }
};  
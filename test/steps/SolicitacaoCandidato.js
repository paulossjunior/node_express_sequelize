const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
let concursos = [];
let concurso_perfil = false;
let candidato_banco;

const Candidato = require('../../server/models').Candidato;

defineSupportCode( async function ({ Given, Then, When }) {

    //Given Eu sou um candidato com CPF cadastrado      
     await Given('Eu sou um candidato com CPF cadastrado', async function () {
        // Write code here that turns the phrase above into concrete actions
        candidato_banco = await Candidato.findById(1).then(candidato =>{
            assert.notEqual(candidato, null);
            console.log("teste",candidato.cpf);
            assert.notEqual(0,candidato.id); 
        });        
    });

    //And Há pelo meno um concurso para o meu perfil

    await Given('Há pelo meno um concurso para o meu perfil', async function () {
        // Write code here that turns the phrase above into concrete actions
        concurso_perfil = true;
    });

    //When Eu envio o meu CPF

    When('Eu envio o meu CPF', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    //Then O sistema retorna a lista de concursos que eu me encaixo

    Then('O sistema retorna a lista de concursos que eu me encaixo', function () {
        // Write code here that turns the phrase above into concrete actions
        assert(0 < concursos.length());
    });

    /*
    2) Scenario: Candidato valido e concurso não existente # test/features/SolicitacaoCandidato.feature:12
    */  

    //And Não há concurso para o meu perfil

    Given('Não há concurso para o meu perfil', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    /*Then O sistema informa que não concursos para o perfil*/
    Then('O sistema informa que não concursos para o perfil', function () {
        // Write code here that turns the phrase above into concrete actions        
        assert(null != concursos.length());
        assert(0 == concursos.length());
    });

    /*
    3) Scenario: Candidato não cadastrado # test/features/SolicitacaoCandidato.feature:18
    Given Eu sou um candidato não cadastrado
    */
    Given('Eu sou um candidato não cadastrado', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    /*O sistema informa que não sou cadastrado*/
    Then('O sistema informa que não sou cadastrado', function () {
        // Write code here that turns the phrase above into concrete actions
        assert(candidatoCadastrado == false);
    });
});
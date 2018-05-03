Feature: Eu, como Candidato, quero buscar os concurso do meu interesse

Essa História de Usuario é responsavel por controlar todos o acesso do Candidato
aos concurso aberto. 

Scenario: Candidato valido e concurso existente
Given Eu sou um candidato com CPF cadastrado
And Há pelo menos um concurso para o meu perfil
When Eu envio o meu CPF 
Then O sistema retorna a lista de concursos que eu me encaixo

Scenario: Candidato valido e concurso não existente
Given Eu sou um candidato com CPF cadastrado
And Não há concurso para o meu perfil
When Eu envio o meu CPF 
Then O sistema informa que não concursos para o perfil

Scenario: Candidato não cadastrado 
Given Eu sou um candidato não cadastrado
When Eu envio o meu CPF 
Then O sistema informa que não sou cadastrado
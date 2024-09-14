const database = 'BD3-NoSQL-AtlasMognoDB'

const collection = 'bd3-nosql-ativ1'


use(database);

db[collection].insertOne(
    {
      "cod_aluno": 1,
      "cod_turma": 3,
      "nome": "João Elidio Santos",
      "cpf": "42857392032",
      "rg": "371927382",
      "telefone_aluno": "11928372273",
      "telefone_resposavel": "11999283742",
      "email": "elidiodosgames@gmail.com",
      "data_nascimento": "2004-02-20"
      }
)
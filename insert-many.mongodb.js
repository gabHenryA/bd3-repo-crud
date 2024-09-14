const database = 'BD3-NoSQL-AtlasMognoDB'

const collection = 'bd3-nosql-ativ1'

use(database)

db[collection].insertMany(
    [
        {
            "cod_aluno": 1,
            "cod_turma": 1,
            "nome": "Gabriel Henry Andrade Melo da Silva",
            "cpf": "42894175393",
            "rg": "329892450",
            "telefone_aluno": "11973205375",
            "telefone_resposavel": "11943767094",
            "email": "gabrielsilva914@gmail.com",
            "data_nascimento": "2007-12-11"
        },

        {
            "cod_aluno": 2,
            "cod_turma": 1,
            "nome": "Geovanna Caroline Souza Gaia",
            "cpf": "12345678901",
            "rg": "456123789",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "geovaninhadocapa@gmail.com",
            "data_nascimento": "1999-05-20"
        },
        {
            "cod_aluno": 3,
            "cod_turma": 1,
            "nome": "João Pedro Oliveira",
            "cpf": "23456789012",
            "rg": "567234890",
            "telefone_aluno": "11934567890",
            "telefone_responsavel": "11923456789",
            "email": "joao.pedro@outlook.com",
            "data_nascimento": "2001-08-15"
        },
        {
            "cod_aluno": 4,
            "cod_turma": 1,
            "nome": "Daniel Késede Barros de Sousa",
            "cpf": "34567890123",
            "rg": "678345901",
            "telefone_aluno": "11945678901",
            "telefone_responsavel": "11934567890",
            "email": "ana.clara@yahoo.com.br",
            "data_nascimento": "2002-11-30"
        },
        {
            "cod_aluno": 5,
            "cod_turma": 1,
            "nome": "Lucas Martins",
            "cpf": "45678901234",
            "rg": "789456012",
            "telefone_aluno": "11956789012",
            "telefone_responsavel": "11945678901",
            "email": "lucas.martins@gmail.com",
            "data_nascimento": "2003-02-25"
        },
        {
            "cod_aluno": 8,
            "cod_turma": 1,
            "nome": "Juliana Pereira",
            "cpf": "56789012345",
            "rg": "890567123",
            "telefone_aluno": "11967890123",
            "telefone_responsavel": "11956789012",
            "email": "juliana.pereira@hotmail.com",
            "data_nascimento": "1998-07-10"
        },
        {
            "cod_aluno": 7,
            "cod_turma": 1,
            "nome": "Carlos Eduardo Lima",
            "cpf": "67890123456",
            "rg": "901678234",
            "telefone_aluno": "11978901234",
            "telefone_responsavel": "11967890123",
            "email": "carlos.lima@live.com",
            "data_nascimento": "2000-09-12"
        },
        {
            "cod_aluno": 9,
            "cod_turma": 1,
            "nome": "Fernanda Souza",
            "cpf": "78901234567",
            "rg": "012789345",
            "telefone_aluno": "11989012345",
            "telefone_responsavel": "11978901234",
            "email": "fernanda.souza@gmail.com",
            "data_nascimento": "2001-04-08"
        },
        {
            "cod_aluno": 10,
            "cod_turma": 1,
            "nome": "Ricardo Gomes",
            "cpf": "89012345678",
            "rg": "123890456",
            "telefone_aluno": "11990123456",
            "telefone_responsavel": "11989012345",
            "email": "ricardo.gomes@gmail.com",
            "data_nascimento": "1999-06-22"
        },
        {
            "cod_aluno": 12,
            "cod_turma": 1,
            "nome": "Larissa Rocha",
            "cpf": "90123456789",
            "rg": "234901567",
            "telefone_aluno": "11901234567",
            "telefone_responsavel": "11990123456",
            "email": "larissa.rocha@yahoo.com.br",
            "data_nascimento": "2002-10-05"
        },
        {
            "cod_aluno": 18,
            "cod_turma": 1,
            "nome": "Eduardo Fernandes",
            "cpf": "01234567890",
            "rg": "345012678",
            "telefone_aluno": "11912345670",
            "telefone_responsavel": "11901234567",
            "email": "eduardo.fernandes@gmail.com",
            "data_nascimento": "2001-01-18"
        },
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
    ]
)
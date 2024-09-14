const database = 'BD3-NoSQL-AtlasMognoDB'

const collection = 'bd3-nosql-ativ1'

use(database)

db[collection].find({"cpf":"23456789012"},
                    {"cod_aluno":0});
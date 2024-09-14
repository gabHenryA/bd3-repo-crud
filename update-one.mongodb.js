const database = 'BD3-NoSQL-AtlasMognoDB'

const collection = 'bd3-nosql-ativ1'

use(database)

db[collection].updateOne(
    {"cod_aluno": 5},
    {$set:{"nome": "Luciana Martins", "CPF":'59120511250', "RG":"832925035"}}
)
const database = 'BD3-NoSQL-AtlasMognoDB'

const collection = 'bd3-nosql-ativ1'

use(database)

db[collection].deleteOne(
    {"cpf": '42857392032'}
)
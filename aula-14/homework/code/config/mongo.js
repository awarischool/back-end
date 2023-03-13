const { MongoClient } = require('mongodb');

const URL = 'mongodb://<URL>';
const DATABASE_NAME = 'myProject';

const client = new MongoClient(URL);

async function main() {
  await client.connect();

  const db = client.db(DATABASE_NAME);
  db.collection('<COLLECTION_NAME>');
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
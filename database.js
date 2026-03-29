

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete

const { MongoClient } = require("mongodb")

const url = "mongodb+srv://syedaliya03_db_user:<PASSWORD>@nodelevelone.iwr3d25.mongodb.net/"

// Create a new MongoClient
const client = new MongoClient(url);

// Database Name
const dbName = 'NodeJs'


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');


  const data = {
    firstname: 'faiza',
    email: 'fzzz@gmail.com',
    phoneNumber: '746781101'
  }
  

  // inserting documents
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

  //reading documents
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  //counting documents
  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
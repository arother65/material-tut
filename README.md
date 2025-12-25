# Stand: 15.10.2025

# Starter Project for the Material UI-components
- using bootstrap-scss in /src/scss

# MongoDB
import mongodb from 'mongodb';
import MongoClient from 'mongodb';

const uri = "mongodb+srv://<db_username>:<db_password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("<databaseName>").collection("<collectionName>");
  // perform actions on the collection object

  client.close();
});

# https://www.mongodb.com/docs/drivers/node/current/connect/mongoclient/#std-label-node-mongoclient

# other databases
- firebase: intransparent usage , via SDK-access?
- postgreSQL: maybe use JDBC-driver

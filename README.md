### Starter Project for the Material UI playlist
Stand: 15.10.2025

# import mongodb from 'mongodb';
import MongoClient from 'mongodb';

const uri = "mongodb+srv://<db_username>:<db_password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("<databaseName>").collection("<collectionName>");
  // perform actions on the collection object
  client.close();
});

# https://www.mongodb.com/docs/drivers/node/current/connect/mongoclient/#std-label-node-mongoclient

# trying to load with require()-function 
import {useCallback, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// Usually we would write a static import:
// import VeryExpensive from './VeryExpensive';

let VeryExpensive = null;

export default function Optimize() {
  const [needsExpensive, setNeedsExpensive] = useState(false);
  const didPress = useCallback(() => {
    if (VeryExpensive == null) {
      VeryExpensive = require('./VeryExpensive').default;
    }

    setNeedsExpensive(true);
  }, []);

  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={didPress}>
        <Text>Load</Text>
      </TouchableOpacity>
      {needsExpensive ? <VeryExpensive /> : null}
    </View>
  );
}

# other databases
- firebase: intrasparent usage , via SDK?
- postgreSQL: maybe use JDBC-driver

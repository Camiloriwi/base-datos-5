/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'NEW_COLLECTION_NAME';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollec

db.createCollection('users');

db.users.insertMany([
    {   
        _id:1,
        nombre: 'camilo',
        apellido: 'correa',
        edad: 5,
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 2,
        nombre: 'tobias',
        apellido: 'rojas',
        edad: 10,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 3,
        nombre: 'cristian',
        apellido: 'manco',
        edad: 15,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 4,
        nombre: 'robinson',
        apellido: '',
        edad: 20,
        telefono: 123-456,
        correo: 'riwi@riwi.io',
    },
    {   
        _id: 5,
        nombre: 'josney',
        apellido: 'castillo',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 6,
        nombre: 'alonso',
        apellido: 'rueda',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 7,
        nombre: 'sergio',
        apellido: 'carvajal',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 8,
        nombre: 'pepe',
        apellido: 'quintana',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 9,
        nombre: 'pedro',
        apellido: 'velez',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 10,
        nombre: 'pablo',
        apellido: 'zuluaga',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@riwi.edu.co',
    }, {   
        _id: 11,
        nombre: 'daniel',
        apellido: 'lopez',
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 12,
        nombre: 'miguel',
        apellido: 'tabares',
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },

])

db.users.find();

db.usuarios.insertMany([
    {   
        _id:1,
        nombre: 'camilo',
        apellido: 'correa',
        edad: 5,
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 2,
        nombre: 'tobias',
        apellido: 'rojas',
        edad: 10,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 3,
        nombre: 'cristian',
        apellido: 'manco',
        edad: 15,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 4,
        nombre: 'robinson',
        apellido: '',
        edad: 20,
        telefono: 123-456,
        correo: 'riwi@riwi.io',
    },
    {   
        _id: 5,
        nombre: 'josney',
        apellido: 'castillo',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 6,
        nombre: 'alonso',
        apellido: 'rueda',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 7,
        nombre: 'sergio',
        apellido: 'carvajal',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },
    {   
        _id: 8,
        nombre: 'pepe',
        apellido: 'quintana',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 9,
        nombre: 'pedro',
        apellido: 'velez',
        edad: 25,
        telefono: 123-456,
        correo: 'riwi@hotmail.com',
    },
    {   
        _id: 10,
        nombre: 'pablo',
        apellido: 'zuluaga',
        edad: 30,
        telefono: 123-456,
        correo: 'riwi@riwi.edu.co',
    }, {   
        _id: 11,
        nombre: 'daniel',
        apellido: 'lopez',
        telefono: 123-456,
        correo: 'riwi@gmail.com',
    },
    {   
        _id: 12,
        nombre: 'miguel',
        apellido: 'tabares',
        telefono: 123-456,
        correo: 'riwi@outlock.com',
    },

])


db.usuarios.find();


/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const mySql = require('mysql');
    const bodyParser = require('body-parser');
//

const dataCollection = [
    {
  "content": [
    {
      "_id": 2,
      "content": "Ajouter les routes front et api",
      "category": "WORK",
      "isDone": "true"
    },
    {
      "_id": 3,
      "content": "Configurer la BDD mySql",
      "category": "WORK",
      "isDone": "false"
    },
    {
      "_id": 5,
      "content": "Configurer le serveur NodeJS",
      "category": "WORK",
      "isDone": "true"
    },
    {
      "_id": 9,
      "content": "Aller manger",
      "category": "LIFE",
      "isDone": "false"
    }
  ],
  "fields": [
    {
      "catalog": "def",
      "db": "todoes",
      "table": "tasks",
      "orgTable": "tasks",
      "name": "_id",
      "orgName": "_id",
      "charsetNr": 63,
      "length": 11,
      "type": 3,
      "flags": 16899,
      "decimals": 0,
      "zeroFill": false,
      "protocol41": true
    },
    {
      "catalog": "def",
      "db": "todoes",
      "table": "tasks",
      "orgTable": "tasks",
      "name": "content",
      "orgName": "content",
      "charsetNr": 33,
      "length": 765,
      "type": 253,
      "flags": 4097,
      "decimals": 0,
      "zeroFill": false,
      "protocol41": true
    },
    {
      "catalog": "def",
      "db": "todoes",
      "table": "tasks",
      "orgTable": "tasks",
      "name": "category",
      "orgName": "category",
      "charsetNr": 33,
      "length": 765,
      "type": 253,
      "flags": 4097,
      "decimals": 0,
      "zeroFill": false,
      "protocol41": true
    },
    {
      "catalog": "def",
      "db": "todoes",
      "table": "tasks",
      "orgTable": "tasks",
      "name": "isDone",
      "orgName": "isDone",
      "charsetNr": 33,
      "length": 30,
      "type": 253,
      "flags": 4097,
      "decimals": 0,
      "zeroFill": false,
      "protocol41": true
    }
  ]
}
]

/*
Configurer la connexion à la BDD
*/
    const connection = mySql.createConnection({
        host     : 'localhost',
        port     : '8889',
        user     : 'root',
        password : 'root',
        database : 'todoes'
    });
//

/*
Configuration de body-parser
*/
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({extended: false}));
//

/*
Définition des routes
*/
    // Accueil de l'API
    router.get( '/', (req, res) => {
        // Renvoyer un flux JSON dans la réponse
        res.json( { content: 'Hello API' } );
    });

    // Afficher la liste des posts
    router.get( '/tasks', (req, res) => {
        // Lancer la requête SQL
        connection.query('SELECT * FROM tasks', (error, results, fields) => {
            if (error) {
                res.json({ content: error })

            } else{
                res.json( { content: results, fields: fields } )
            }
        });
    });

    // Créer une route en mode POST
    router.post('/tasks', (req, res) => {
      console.log(req.body);
      connection.query(`
        INSERT INTO tasks 
        (content, category) 
        VALUES (${req.body.newTaskContent}, ${req.body.newTaskType})
      )
        
      `, (error, results, fields) => {
        if (error) {
            res.json({ content: error })

        } else{
            res.json( { content: results, fields: fields } )
        }
    });
  });
//

/*
Exporter le module de route
*/
    module.exports = router;
//
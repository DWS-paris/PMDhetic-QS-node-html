/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const mySql = require('mysql');
//

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
Définition des routes
*/
    // Accueil de l'API
    router.get( '/', (req, res) => {
        // Renvoyer un flux JSON dans la réponse
        res.json( { content: 'Hello API' } );
    });

    // Afficher la liste des posts
    router.get( '/tasks', (req, res) => {
        // Ouvrir la connexion à la BDD
        connection.connect();

            // Lancer la requête SQL
            connection.query('SELECT * FROM tasks', (error, results, fields) => {
                if (error) {
                    res.json({ content: error })

                } else{
                    res.json( { content: results, fields: fields } )
                }
            });
            
        // Fermer la connexion à la BDD
        connection.end();
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//
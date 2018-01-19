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
    router.get( '/', (req, res) => {
        // Ouvrir la connexion à la BDD
        connection.connect();

            // Renvoyer un flux JSON dans la réponse
            res.json( { content: 'Hello API' } );

        // Fermer la connexion à la BDD
        connection.end();
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//
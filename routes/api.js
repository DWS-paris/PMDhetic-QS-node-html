/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const bodyParser = require('body-parser');
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
        // Renvoyer un flux JSON dans la réponse
        res.json( { content: 'Hello API' } );
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//
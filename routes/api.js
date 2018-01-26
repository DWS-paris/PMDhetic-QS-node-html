/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const bodyParser = require('body-parser');
//

/*
Configuration de Mongoose
*/
    const mongoose = require('mongoose');
    const mongoServeur = 'mongodb://localhost:27018/blog';
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
    router.get( '/posts', (req, res) => {
       
        // Connexion à la BDD MongoDB
        mongoose.connect( mongoServeur, ( err, db ) => {

            // Tester la connexion à la BDD
            if( err ) { res.json({ error: err }) }
            else {

                // Connexion ouverte : récupérer la collection de données
                db.collection('posts').find().toArray( (err, collection) => {

                    // Tester la connexion à la collection
                    if( err ) { res.json({ error: err }) }
                    else{

                        // Collection récupérée
                        res.json(collection);
                    };
                });
            };

            // Fermer la connexion
            db.close();
        });
    });


    // Créer une route API pour ajouter un article
    router.post('/add-post', (req, res)=> {
        console.log(req.body)
        res.render('add-post');
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//
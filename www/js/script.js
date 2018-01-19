// Attendre le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    

    // Créer une fonction pour la requête
    var asyncLoadFunction = function asyncLoadFunction(theApiUrl) {
        // La fonction fetch() prend en paramètre l'adresse de l'API
        fetch(theApiUrl).then(function (data) {
            // Les données sont présentes => renvoyer une Promise de type 'resolve'
            if (data.ok) {
                return Promise.resolve(data);
            }

            // Les données sont présentes => renvoyer une Promise de type 'reject'
            else {
                return Promise.reject(new Error('Problème dans la requête'));
            }
        })

        // Traiter le réponse
        .then(function (data) {
            return data.json();
        })

        // Manipuler les données de la réponse
        .then(function (data) {
            console.log(data)
        })

        // Capter l'erreur
        .catch(function (err) {
            return console.log(err);
        });
    };

    asyncLoadFunction('http://localhost:3000/api/tasks')


}); // Fin de l'attente de cha rgement du DOM
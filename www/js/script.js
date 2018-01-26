// Attendre le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {

    let tasksList = document.querySelector('#tasksList');
    
    // Créer une fonction pour ajoutrer des éléments dans le DOM
    let appendTags = ( paramData ) => {
        // Faire une boucle sur la colleciton de données
        for( let item of paramData ){            
            // Ajouter des balise HTML dans tasksList
            tasksList.innerHTML += `<li>${item.content} (${item.category}) ${item.isDone}</li>`;
        };
    };
    

    // Créer une fonction pour la requête
    let asyncLoadFunction = (theApiUrl) => {
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
            // Appeler la fonction pour ajouter des balises HTML
            appendTags(data.content);
        })

        // Capter l'erreur
        .catch(function (err) {
            return console.log(err);
        });
    };

    // Appeler la fonction async
    asyncLoadFunction('http://localhost:3000/api/tasks');



    /*
    Capter la soumission du formulaire
    */
        let addTaskForm = document.querySelector('#addTaskForm');
        addTaskForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

            // Récupération de la valeur des champs
            let newTaskContent = document.querySelector('[name="newTaskContent"]').value;
            let newTaskType = document.querySelector('[name="newTaskType"]').value;

            fetch('http://localhost:3000/api/tasks', {
                // Configuration de la requête en POST
                method: 'post',
                headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                // Envoie des données dans l'URL
                body: 'newTaskContent=' + newTaskContent + '&newTaskType=' + newTaskType
                
            }).then( res => {
                return res.json();

            }).then( data => {
                console.log(data);

            }).catch(err => {
                console.log(err);
            })
        });
    //


}); // Fin de l'attente de chargement du DOM
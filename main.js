// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function() {

    'use strict';

    var results = [];
    var users = {};

    fetch("https://randomuser.me/api/?results=12?")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let results = json.results;
            console.log(results);
        });

    console.log(users);




})();
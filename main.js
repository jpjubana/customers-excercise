// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

+ //firstname lastname
+ //emailAddress
+ //street address
+ //city ST zip
+ //phone ###-###-####

(function() {

    'use strict';

    const allCustomers = document.querySelector('.customers');

    fetch("https://randomuser.me/api/?results=12&nat=us&seed=foobar")
        .then(function(response) { return response.json(); })
        .then(function(data) {
            customerData(data.results);

        });

    function customerData(arr) {
        for (let i in arr) {
            let customerName = arr[i].name.first + " " + arr[i].name.last;
            let customerEmail = arr[i].email;
            let sAddress = arr[i].location.street;
            let cAddress = arr[i].location.city;
            let stAddress = arr[i].location.state;
            let zAddress = arr[i].location.postcode;
            let cNumber = arr[i].cell;
            let photo = arr[i].picture.large;
            let container = document.createElement('div');
            container.classList.add('customer');
            let frame = document.createElement('div');
            frame.classList.add('picframe');
            let portrait = document.createElement('img');
            portrait.setAttribute('src', photo);
            frame.appendChild(portrait);
            container.appendChild(frame);
            let name = document.createElement('p');
            name.textContent = customerName.toUpperCase();
            name.classList.add('name');
            container.appendChild(name);
            let email = document.createElement('p');
            email.textContent = customerEmail;
            email.classList.add('email');
            container.appendChild(email);
            let address1 = document.createElement('p');
            address1.textContent = sAddress;
            address1.classList.add('address');
            container.appendChild(address1);
            let address2 = document.createElement('p');
            address2.textContent = cAddress + "," + " " + stAddress + " " + zAddress;
            address2.classList.add('address');
            container.appendChild(address2);
            let contact = document.createElement('p');
            contact.textContent = cNumber;
            container.appendChild(contact);
            allCustomers.appendChild(container);
        }
    }


})();
const personAvatar = document.querySelector('.person-avatar');
const personName = document.querySelector('.name-person');
const personLastName = document.querySelector('.last-name-person');
const personLocation = document.querySelector('.location-person');
const personPhone = document.querySelector('.phone-person');
const personEmail = document.querySelector('.email-person');
const generateButton = document.querySelector('.generate-button');

async function serverRequest() {
    let url = 'https://randomuser.me/api/';
    let response = await fetch(url);
    let commits = await response.json();
    personEmail.innerHTML = 'Email: ' + commits.results[0].email;
    personAvatar.src = commits.results[0].picture.large;
    personName.innerHTML = 'Name: ' + commits.results[0].name.first;
    personLastName.innerHTML = 'Last Name: ' + commits.results[0].name.last;
    personPhone.innerHTML = 'Phone: ' + commits.results[0].phone;
    personLocation.innerHTML = 'Location: ' + commits.results[0].location.country + ' , '
        + commits.results[0].location.state + ' , ' + commits.results[0].location.city;
}

serverRequest();
generateButton.addEventListener('click', serverRequest);

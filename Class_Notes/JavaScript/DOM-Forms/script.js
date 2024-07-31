// console.log("running");

// DOM
// const HTML = {
//     title: '<title> DOM and Forms</title>',
//     body: '<body> .. ..',
// }

// console.log(document.body);
// console.dir(document.body);

// document.body.style.backgroundColor = 'red';

// // Query Selector
// let h1 = document.querySelector('h1');

// let titleCOntent = h1.innerText;

// console.log(titleCOntent);

// const popUpBtn = document.querySelector('.popup-btn');

// popUpBtn.style.width = '200px'
// popUpBtn.style.height = '200px'
// popUpBtn.style.fontSize = '70px'

// popUpBtn.addEventListener('click', (event) => {
//     alert('Button was clicked!')
// })

// Form

const newsForm = document.querySelector('.news-form');

console.dir(newsForm)

let subscriberList = [
    {
        name: 'example-name',
        email: 'example-email'
    }
]

newsForm[2].addEventListener('click', (event) => {
    // Will prevent the form from the default action of refreshing the page.
    event.preventDefault()
    // alert('Form was submitted!')
    const newSub = {
        name: '',
        email: ''
    }
    // debugger
    // Fetch text from name input
    const nameInput = document.querySelector('input[name="name-input"]').value;
    // console.dir(nameInput);
    // Fetch text from email input
    const emailInput = document.querySelector('input[name="email-input"]').value;

    // console.log(nameInput);
    // console.log(emailInput);
    // We want to validate the user input.
    if (nameInput.length == 0 || emailInput.length == 0) {
        alert('Please enter your name and email to subscribe')
    }
    if (!emailInput.includes('@')) {
        alert('Please enter a valid email to subscribe')
    }
    newSub.name = nameInput;
    newSub.email = emailInput;
    subscriberList.push(newSub);
    displaySubscriberList();
})

// Task: Display list of subscribers on page
// Fetch the <ul> element


const subscriberListUL = document.querySelector('.subscriber-list');


function displaySubscriberList() {
    subscriberList.forEach((sub, index) => {
        // Create a new <li>
        const newSub = document.createElement('li')
        // Set inner text of <li> to the subscriber name and email
        newSub.innerText = `${sub.name} has subscribed with the email ${sub.email}`;
        subscriberListUL.appendChild(newSub);
    })
}



// We want to loop through 

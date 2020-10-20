// API = Application programming interface
// Something you use to do something complex
// User interace how our users will interact with something
// API is the way you interact with other applcations
// a synchronous programming - FETCH is a method that we are going to use to grab APIs
//FETCH uses promises 
const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
// const spaceShips = document.querySelector('ul');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(){
    event.preventDefault();//this prevents the default action of whatever it is assigned to
    // This is function is firing on user activity
    //fetch is a modern solution- it is apart of the browser
    //fetch is how you get JSON from the internet
    //if we want to do things with the data use the method .then()
    //.then() takes in a callback for a success or failure. We need a function in here

    //* .then() has you run a fucntion and runs it in the browser when console.log() it.
    fetch(baseURL)
        .then(result => {
            // console.log(result.json());
            return result.json()
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })
}

function displayRockets(json){
    console.log(`Results:`, json);
    // let rockets = json.forEach( r => {        
    //     let rocket = document.createElement('li');
    //     rocket.innerText = r.name;
    //     spaceShips.appendChild(rocket);
    // }); 

    let rockets = json.forEach( r => {
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}



//* When you're creating a variable you have to .appendChild() to place it somewhere into the file

/*
* .then() is saying only when it works I want you to run something and then what to do if it fails

* Promise has 3 states: Pending, Fulfilled, Rejected

*Thought process for a developer
* go find an api that finds or sells the data that I need to learn
*/
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'eYWjpUtCC9BtXCEHrPftXatGDGMXjdfA'; 
let url; 
// Just dfining out search, start date, etc.
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');


const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');


const section = document.querySelector('section');
nav.style.display = 'none';
let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage); 


function fetchResults(e) { // This is the actual function that pulls our results
    console.log(e); 
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 
    console.log(url); 
  }
  
  function nextPage(){
    console.log("Next button clicked");
  } //5
  
  function previousPage(){
    console.log("Next button clicked");
  } //5

  function fetchResults(e) {
    e.preventDefault(); 
    url = baseURL + '?api-key=' + key + '&page=' + //Takes our serach
    pageNumber + '&q=' + searchTerm.value;  
}

function fetchResults(e) {
    e.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  
    //1
    fetch(url)
      .then(function(result) {  //Runs search from start date to end entered
      console.log(result)
      return result.json(); 
    }).then(function(json) {
      displayResults(json); 
    });
  }

  if(startDate.value !== '') {  //Takes our search
    console.log(startDate.value) //uses the start date we enter in
  url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {  //Runs search from start date to end date entered
  url += '&end_date=' + endDate.value;
};

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild); 
  
    }
    
    let articles = json.response.docs;  // if at least 10 results then will display in block
    if(articles.length === 10) {
        nav.style.display = 'block'; 
      } else {
        nav.style.display = 'none'; // if less than 10 doesn't show display nav
    
    };
  
    if(articles.length === 0) { //If article is equal to 0 then show no results
      console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) { //displays articles in this order
        let article = document.createElement('article'); 
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img'); 
        let para = document.createElement('p'); 
      let clearfix = document.createElement('div'); //clearfix keeps the image in the div

      let current = articles[i]; 
      console.log("Current:", current);  // * display a string with the articles

      link.href = current.web_url;
      link.textContent = current.headline.main; // * displays headline as link
      para.textContent = 'Keywords: ';  //* pulls the keywords

      for(let j = 0; j < current.keywords.length; j++) { //* Dictates how we are displaying our keywords  after our search
        let span = document.createElement('span');   
        span.textContent += current.keywords[j].value + ' ';   //* This line helps "break apart our keywords"

        para.appendChild(span); //* this is where we actually see our keywords 
        if(current.multimedia.length > 0) { //* if it's an article and it has an image then it will display an image
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
            img.alt = current.headline.main;
          } //* this is just tell ing us where to pull the image

    
  
        clearfix.setAttribute('class','clearfix'); //* class is clearfixed into the div

        article.appendChild(heading);  //* This is giving us what we'll get from our results
        section.appendChild(article);
        heading.appendChild(link); 
        article.appendChild(img);
        article.appendChild(para);
        article.appendChild(clearfix);
      }
    } 





}
}


function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url); }

function nextPage(e) {   
        pageNumber++;
        fetchResults(e); 
        console.log("Page number:", pageNumber); 
     }

function previousPage(e) { // this would allow us to back a page
if(pageNumber > 0) {  //if the page number is more than zero then we go back by one page
// if the page is 0 then we cannot go back any further
    pageNumber--; 
    } else {
    return;}
    fetchResults(e);
    console.log("Page:", pageNumber); //Regardless of where we are at we will know what page number we are on
      }

function nextPage (){
    console.log('Next button clicked'); //* assuming we're going to the next/previus page in the functions
}

function previousPage (){
    console.log('Previous button clicked');
}
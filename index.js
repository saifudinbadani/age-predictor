var inputName = document.querySelector('#nameInput');
var checkButton = document.querySelector('#checkButton');
var outputResult = document.querySelector('#outputResult');


function agePredictor(){
   let name = inputName.value;
    // prompt('Enter your first name');
    constructUrl = "https://api.agify.io?name=" + name;
    fetch(constructUrl)
    .then(response => {if (response.status === 404){
        outputResult.innerText = 'Page not found'
    }
    else if (response.status === 401){
        outputResult.innerText = 'Not logged in'
    }
    else {
        return response.json()}
    })
    .then(json => 
            outputResult.innerHTML = "<h2> "+ "Name: " + `${json.name}`+ "</h2>" 
            + "<h3>" + "Age: "+ `${json.age}` + "</h3>")
    .catch(error => 
                console.log(error)); }
        
            
        
        
        
        
checkButton.addEventListener('click', agePredictor);


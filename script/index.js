//console.log("checking 1, 2, 3"); //just checking to make sure everything is up and running

const apiKey = 'live_OwhhhHYXMP56Fmf24uUzlKb1Zl5XrO3926cS4Mr2Ngcno632lTMw1v2iiG9YcsUF';
const requestBody = {
    name: 'Fluffy',
    breed: 'Persian',
    age: 3
};

function handleResponse(response) {
    if (response.ok) {
      return response.json()
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error parsing response:', error);
        });
    } else {
      console.error('Request failed with status:', response.status);
    }
  }
  
  postData();

async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'x-api-key': apiKey // add your API key header here
      }
    });
  
    handleResponse(response);
  }
  
  postData();
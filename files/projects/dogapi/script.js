const DogImageDiv = document.getElementById('dogImage')



function newdog(){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response => response.json()))  
    .then(json  =>{
      DogImageDiv.innerHTML = `<img src='${json.message}' height= 300 width= 300 />`
    } )  
}


//.then = promises in js
//asynchronous programming means 'stuff you have to wait for' in simple terms











//we are fetching a random image from that particular api link 
//then we use the ".then" function to write the next function inside it
//we take a single response like const response of responses and we turn that response into response.json()
//again we use the .then funcion to take a single json out of the response.json and console.log it.




let showWeather = (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
    let request = new XMLHttpRequest();

    request.open('GET', url);

    request.responseType = 'json';
    
    request.send();    


    request.onload = function () {
        if(request.readyState === request.DONE){
            if(request.status === 200){
                let response = request.response.main.temp;
                
                document.querySelector('.weather').textContent = response;
                document.querySelector('.city').textContent = request.response.name;
    
            }
        }
    }    
}

showWeather('lausanne');

document.querySelector('#change').addEventListener('click', () => {
    showWeather(prompt('Enter a city '));
})


const submitBtn  = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    //console.log('testOk');
    const inputBtn = document.getElementById('input-btn').value;
    //console.log(inputBtn);


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=9622c3fabf106cf1a7b844fcb66a71f9')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const country = data.sys.country;
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const feelLike =  data.main.feels_like;
        const feelsLike = feelLike -273.15;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;



        document.getElementById('country').innerText = country;
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = temp.toFixed(2);
        document.getElementById('feels-like').innerText = feelsLike.toFixed(2);
        document.getElementById('humidity').innerText = humidity;
        document.getElementById('wind-speed').innerText = windSpeed;
        document.getElementById('description').innerText = description;
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + cityName + "')";



    })
    .catch(res => alert("Please type a valid city name."))
})
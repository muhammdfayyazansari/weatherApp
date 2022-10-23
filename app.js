let getWeather = () => {
  console.log('fayyaz')
  let getBackground = document.querySelector('#backgroundImage');
  let getCardImage = document.querySelector('#changeToTransparent')
  let cityName = document.querySelector("#cityName").value;
  let getDate = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
  console.log(getDate)
  console.log(typeof getDate)
  console.log(getDate.slice(27,32))
  // API 7bdae86fe3c8715ee86cbc6817dd7124

  axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=7bdae86fe3c8715ee86cbc6817dd7124&q=${cityName}`)
    .then(function (response) {
      // handle success
      console.log("response is success");
      console.log(response.data);
      console.log(response.data.name)
      document.querySelector('#showCityName').innerHTML = `${response.data.name}`
      document.querySelector('#showTime').innerHTML = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a").slice(27,32) + moment().format("dddd, MMMM Do YYYY, hh:mm:ss a").slice(36)
      document.querySelector('#temp').innerHTML = `${response.data.main.temp}`
      document.querySelector('#weather').innerHTML = `${response.data.weather[0].main}`
      document.querySelector('#wind').innerHTML = `${response.data.wind.speed}`
      document.querySelector('#humidity').innerHTML = `${response.data.main.humidity}`
      document.querySelector('#pressure').innerHTML = `${response.data.main.pressure}`
      // document.querySelector('#weatherIcon').setAttribute('src',`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png$`)
      document.querySelector('#weatherIcon').src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
      document.querySelector('#formDiv').setAttribute('class','col-12 d-none justify-content-center align-items-center pb-5 ')
      document.querySelector('#showWeather').setAttribute('class','row')

      // BACKGROUND IMAGES CHANGE 
      let getWeatherType = response.data.weather[0].main;
      if(getWeatherType == 'Sun'){
        getBackground.setAttribute("class",'backgroundImageSunny');
      }
      else if(getWeatherType == 'Clouds'){
        getBackground.setAttribute("class",'backgroundImageCloudy');
        console.log('fayayz')
      }
      else if(getWeatherType == 'Wind'){
        getBackground.setAttribute("class",'backgroundImageWindy');
      }
      else if(getWeatherType == 'Storms'){
        getBackground.setAttribute("class",'backgroundImageStormy ');
      }
      else if(getWeatherType == 'Rain'){
        getBackground.setAttribute("class",'backgroundImageRainy');
      }
      else{
        getBackground.setAttribute("class",'backgroundImage');
        console.log(getWeatherType)

      }

      
      
      // document.querySelector("#result").innerHTML =`<h1>${response.data.name}</h1>`
      //     `<h1>${response.data.name}</h1>
      //      <h3> ${response.data.main.temp}°C </h3>`

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

}
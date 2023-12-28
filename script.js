const getOtherWeather = (city, index) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8952bf43d2msh07c8a6e8907a796p1019c8jsn4193a0840ed5',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      cityname.innerHTML=city

      // Update the content dynamically based on the city and index
      document.getElementById(`cloud_pct${index}`).textContent = response.cloud_pct;
      document.getElementById(`temp${index}`).textContent = response.temp;
      temp2222.textContent = response.temp;
      document.getElementById(`feels_like${index}`).textContent = response.feels_like;
      document.getElementById(`humidity${index}`).textContent = response.humidity;
      document.getElementById(`min_temp${index}`).textContent = response.min_temp;
      document.getElementById(`max_temp${index}`).textContent = response.max_temp;
      document.getElementById(`wind_speed${index}`).textContent = response.wind_speed;
      document.getElementById(`wind_degrees${index}`).textContent = response.wind_degrees;
      document.getElementById(`sunrise${index}`).textContent = response.sunrise;
      document.getElementById(`sunset${index}`).textContent = response.sunset;
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
  e.preventDefault()
  getOtherWeather(city.value, 1);

})
// Example usage for Mumbai
getOtherWeather("delhi", 1); // Assuming you want to update the second row with Mumbai's weather initially
getOtherWeather("nashik", 6);
getOtherWeather("mumbai", 3);
getOtherWeather("kolkata", 4);
getOtherWeather("new york", 5);

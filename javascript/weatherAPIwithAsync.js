let myKey = "391a2dc0e5ff0aa8ec1a3c5fbcb7ab3a";
let city = "Taichung";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric&lang=zh_tw`;

// GET請求
// 使用 async/await 進行 GET 請求可以使代碼更加簡潔和易於閱讀。
async function getData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();        
        let weatherDescription = data.weather[0].description;
        let temperature = data.main.temp;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        console.log(data);
        console.log(`城市: ${data.name}`);
        console.log(`天氣狀況: ${weatherDescription}`);
        console.log(`溫度: ${temperature}°C`);
        console.log(`濕度: ${humidity}%`);
        console.log(`風速: ${windSpeed} m/s`);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// POST請求

getData(url);
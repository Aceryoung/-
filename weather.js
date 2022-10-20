const API_KEY = "3433e51caf516e71b7313b54952a5219";

function onGeoOk(position){ //성공했을경우
    // 위치 경도 위도에 대한 변수 선언 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("위치는" ,lat , lng); 
    //API 사용
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) // 자바스크립트를 이용해 url을 불러온다.
    .then((response) => response.json())
    .then((data) => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });


}

function onGeoError(){ // 실패했을경우
    alert("날짜를 불러올수없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //두개의 argument를 줘야한다.(성공,실패)


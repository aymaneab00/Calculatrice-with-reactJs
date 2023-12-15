import { useState } from "react";
import "./App.css";

function App() {
  const [ciudad, setciudad] = useState("");
  const [infos, setinfos] = useState(null);
// function getweather (){
//   const apikey= '#'
//   const url = `httpd://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units-metric `;
//   // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${apikey} `

//   fetch (url)
// .then ((res)=>res.json)
// .then((data)=>{
//   // console.log(data)
// // let MT = Math.round(data.main.temp);
// // let FL = Math.round(data.main.feels_like);

// // const weather = {
// // //  City : `${}`
// // }

// }) }

  return (
    <div>
      <input
        type="text"
        placeholder="enter the name of city"
        value={ciudad}
        onChange={(e) => setciudad(e.target.value)}
      />
      <button onClick={()=>getweather()}>get weather</button>
      {infos && 
      
      <div>
        
        
        
        </div>}
    </div>
  );
}

export default App;

//https://openweathermap.org
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
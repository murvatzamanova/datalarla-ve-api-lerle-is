// https://fakestoreapi.com/
// https://home.openweathermap.org/

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// let data = fetch("./data.json");
// console.log(data);

// const getData = async () => {
//   let res = await fetch("./salam.txt");
//   let data = await res.text();
//   console.log(data);
// };

// getData();

// const getData = async () => {
//   let res = await fetch("./data.json");
//   let data = await res.json();
//   console.log(data.name);
// };

// getData();

// fetch("./data.json").then((res) =>
//   res.json().then((data) => console.log(data))
// );
// .catch((err) => {
//   console.error(err);
// }).finally(()=> {
//   console.log("data loading...");
// })

// let data = {
//   name: "Mikhail",
//   surname: "TAL",
//   age: 45
// };

// age

// GET
// POST
// PUT
// PATCH
// DELETE

// fetch("https://fakestoreapi.com/products")
// .then((res) =>res.json()
// .then((data) => data.map((product)=> console.log(`${product.title} || ${product.price}`)))
// );

// console.log(`${data.title} || ${data.price}`)

// let city = prompt("Şəhər adını daxil edin: ")
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c68d682d2c17bc75b8cb5d892598e11&units=metric&lang=az`)
// .then((res) =>res.json()
// .then((data) => console.log(`${city}-da Tempratur: ${data.main.temp}°C | ${data.weather[0].description}`))
// );

// console.log(`Tempratur: ${data.main.temp}°C`)




















// .....Taski.....//
// : Mehsur filmlerin movcud oldugu bir api url tapin. O apiden istifade ederek, filmin adlarini console-da gosterin

// fetch("https://movies-api14.p.rapidapi.com/movies")
// .then((res) =>res.json()
// .then((data) => data.map((options)=> console.log(`${options.headers} || `)))
// );

key= [4cc43c9591f08a993e37d3de55e50a72]
const urlsi = `https://api.themoviedb.org/3/movie/popular?${key}`;

fetch(urlsi)
  .then(response => response.json())
  .then(data => {
    data.results.film(movie => {
      console.log(movie.title);
    });
  })
  .catch(error => {
    console.error('Bir xeta oldu:', error);
  });

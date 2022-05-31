// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//     return `${user} favorite city is ${favoriteCity}`;
// }
// getFavoriteCity("Name", "Surname", cities[5]);

let getFavoriteCity = (name, surname, city) => {
    
    return `${name} ${surname} favoriteCity is ${city}`;

};

console.log(getFavoriteCity("Name", "Surname", cities[5]));


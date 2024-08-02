const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const getElfRace = () => {

return fetch("https://www.dnd5eapi.co/api/races/elf", requestOptions)
  .then((response) => response.json())
//   .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

export default getElfRace

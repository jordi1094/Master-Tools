const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

const getMonsterByIndex = (index) => {

return fetch(`https://www.dnd5eapi.co/api/monsters/${index}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}

const getObjectByIndex = (index) => {
  return fetch("https://www.dnd5eapi.co/api/equipment/dagger", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

dndApi = {
  getMonsterByIndex,
  getObjectByIndex
}

export default dndApi
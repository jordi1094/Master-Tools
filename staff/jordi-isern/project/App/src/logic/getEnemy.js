const getEnemy = (index) => {

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    
    return fetch(`https://www.dnd5eapi.co/api/monsters/${index}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result})
      .catch((error) => {throw error});
}

export default getEnemy


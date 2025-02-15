const getFullMontersList = () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");


    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
    // TODO control errores    
    return  fetch("https://www.dnd5eapi.co/api/monsters", requestOptions)
        .then((response) => response.json())
        .then((result) => {return(result)})
        .catch((error) => {throw error}) 
}

export default getFullMontersList
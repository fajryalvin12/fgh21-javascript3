const linkMenarik = "https://jsonplaceholder.typicode.com/users"

async function restAPI() {
    const api = await fetch(linkMenarik);
    const data = await api.json(); 
    for(let i = 0; i < data.length; i++)
    console.log("Name: " + (data[i].name))
}
restAPI()
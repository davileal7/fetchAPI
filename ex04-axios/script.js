// 1 - get - FETCH
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => { //tratar erros 
    console.log(error);
})

// post - FETCH
const data = {
    title: "Algum título",
    content: "algum conteúdo",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => { //tratar erros 
    console.log(error);
})







// 2 - get Axios
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((response) =>{
    console.log(response.data);
})
.catch((error)=> {
    console.log(error);
})

// POST - AXIOS
axios.post("https://jsonplaceholder.typicode.com/posts",data)
.then((response) =>{
    console.log(response.data);
})
.catch((error)=> {
    console.log(error);
})



fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
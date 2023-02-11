//dois parametros a URL e a requisição
function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    //NÃO precisa de () se tem 1 Array Function
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#fill_list')

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('id', item.id);
            li.innerHTML = item.title;
            list.appendChild(li);
        })
    }) 
}
    

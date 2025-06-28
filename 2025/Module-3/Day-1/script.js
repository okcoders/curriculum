async function getDataFromServer(){
    console.log('gn2 getDataFromServer')

    const response = await fetch('http://localhost:3000/')
    console.log('response from fetch', response)

    if(!response || !response.ok){
        console.log('response not ok')
        return
    }

    const data = await response.text();
    console.log('data', data)

    const responsePlace = document.getElementById('hello');
    responsePlace.innerText = data;


}


document.addEventListener('DOMContentLoaded', () => {
    getDataFromServer();
})
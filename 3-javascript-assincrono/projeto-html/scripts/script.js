var imgGatos = document.getElementById('imgGatos');
var button = document.getElementById('buttonChangeCat');

const getData = async () => {
    let response = await fetch('https://thatcopy.pw/catapi/rest/')
    let dataJson = await response.json()
    return dataJson.url
}
button.addEventListener('click', async e => {
    imgGatos.src = await getData()
})




const getColor = (event) => {
    // event.preventDefault()
    alert('My favorite color is Yoda green and light side blue.')
}

const getPlace = () => {
    window.location.href = 'https://www.starwars.com/databank/obi-wan-kenobi'
}

const getRitual = () => {
    window.location.href ='https://media4.giphy.com/media/12Gyz2J1b9SjD2/giphy.gif?cid=ecf05e476llec0s7dbvhf7ajuetvzcx0lc7rpeiv6y7l58l7&rid=giphy.gif&ct=g'
}

const getHello = (event) => {
    event.preventDefault()
    alert('H  E  L  L  O   T  H  E  R  E  ;)')
}

let colorBtn = document.getElementById('color')
colorBtn.addEventListener('click', getColor)

let placeBtn = document.getElementById('place')
placeBtn.addEventListener('click', getPlace)

let ritualBtn = document.getElementById('ritual')
ritualBtn.addEventListener('click', getRitual)

let helloPic = document.getElementById('Obi-Juan')
helloPic.addEventListener('mouseover', getHello)

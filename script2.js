let h1 = document.querySelector('h1');
let textbox1 = document.querySelector('#box1');
let textbox2 = document.querySelector('#box2');
let btn = document.getElementById('btn');
let rs = document.querySelector('.respuesta');

function calculo(event) {
    let respuesta = parseInt(textbox1.value) + parseInt(textbox2.value)
    let span = document.createElement('span');
    span.innerText = `tu respuesta es: ${respuesta}`
    span.style.fontSize = '50px'
    span.style.padding = '50px'
    
    span.style.fontWeight = 'bold'
    span.style.color = "white"
    span.style.background = 'red'

    rs.style.margin = '50px'
    rs.appendChild(span)

}

btn.addEventListener('click',calculo)
let btn = document.querySelector('input');
let allP = document.querySelectorAll('p');
let h1 = document.querySelector('h1');

h1.innerText = ''
h1.style.background = 'red'
h1.style.textAlign = 'center'
console.log({btn,allP,h1})

let img = document.createElement('img');
img.setAttribute('src','https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg')
img.width = 100;
img.height = 100;

h1.append(img)
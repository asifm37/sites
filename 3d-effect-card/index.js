const container = document.querySelector('.container');
const card = document.querySelector('.card');
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.info h1');
const desc = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');


// Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 24;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 24;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  // Element PopOut Effect
  sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
  title.style.transform = `translateZ(150px)`;
  desc.style.transform = `translateZ(125px)`;
  sizes.style.transform = `translateZ(100px)`;
  purchase.style.transform = `translateZ(75px)`;
})

//Animate Out - Restore
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  // Reset / Popback Elements
  sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
  title.style.transform = `translateZ(0px)`;
  desc.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
  purchase.style.transform = `translateZ(0px)`;
})

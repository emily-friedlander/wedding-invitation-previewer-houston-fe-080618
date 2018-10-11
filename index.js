document.addEventListener('DOMContentLoaded', function(){
document.getElementById('invite-1').addEventListener('click', function() {
let container=document.querySelector('.flex-2');
container.style.backgroundImage="url('https://cdn.pixabay.com/photo/2018/03/13/04/52/flower-3221695_960_720.jpg')"
})

document.getElementById('invite-2').addEventListener('click', function() {
let container=document.querySelector('.flex-2');
container.style.backgroundImage="url('https://st3.depositphotos.com/5477854/12713/i/950/depositphotos_127137176-stock-photo-vertical-purple-texture-blank-paper.jpg')"
})

document.getElementById('invite-3').addEventListener('click', function() {
let container=document.querySelector('.flex-2');
container.style.backgroundImage="url('https://www.xmple.com/wallpaper/grid-graph-paper-cyan-green-1920x1080-c2-10b6ad-20b2aa-l2-10-360-a-15-f-20.svg')"
})

document.getElementById('invite-1').style.cursor = "pointer";
document.getElementById('invite-2').style.cursor = "pointer";
document.getElementById('invite-3').style.cursor = "pointer";

let box1name1 = document.querySelector('#firstname');
let box1name2 = document.querySelector('#secondname');
let box1name3 = document.querySelector('#date');
let box1name4 = document.querySelector('#location');

let box2name1 = document.querySelector('#pfirstname');
let box2name2 = document.querySelector('#psecondname');
let box2name3 = document.querySelector('#pdate');
let box2name4 = document.querySelector('#plocation');

box1name1.addEventListener('keyup', function(){
box2name1.innerHTML = box1name1.value;
});

box1name2.addEventListener('keyup', function(){
box2name2.innerHTML = box1name2.value;
});

box1name3.addEventListener('keyup', function(){
box2name3.innerHTML = box1name3.value;
});

box1name4.addEventListener('keyup', function(){
box2name4.innerHTML = box1name4.value;
});

});

let initial1;
let initial2;

firstname.addEventListener('keyup', function(e){
	pname1.innerHTML = e.target.value;
	initital1 = e.target.value.charAt(0);
	pinitials.innerHTML = initial1;
});

secondname.addEventListener('keyup', function(e){
	pname2.innerHTML = e.target.value;
	initital2 = e.target.value.charAt(0);
	pinitials.innerHTML = `${initital1} & ${initial2}`;
});
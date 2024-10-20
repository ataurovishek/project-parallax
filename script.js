
let text = document.getElementById('Text');
let treer= document.getElementById('tree-right');
let treel = document.getElementById('tree-left');
let gatel = document.getElementById('gate-left');
let gater = document.getElementById('gate-right');
window.addEventListener('scroll',()=>{
    let value = scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treer.style.left= value * 1.5 + 'px';
    treel.style.left= value * -1.5 + 'px';
    gatel.style.left = value * 0.5 + 'px';
    gater.style.left = value * -0.5 + 'px';
})
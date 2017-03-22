var npc = document.querySelector("#npc");
var i = 0,
    top = 0;

setInterval(function(){
    i += 10;
    npc.style.left = i + 'px';
}, 200)

setInterval(function(){
    i += 10;
    var r = Math.floor(Math.random() * (max - min + 1)) + min;

    npc.style.top = (Math.floor(Math.random())));
}, 400)
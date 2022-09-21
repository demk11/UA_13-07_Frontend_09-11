document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#div1").addEventListener("click", function(){
        alert('div #1!');
    }, true);

    document.querySelector("#div2").addEventListener("click", function(){
        alert('div #2!');
    }, true);

    document.querySelector("#div3").addEventListener("click", function(){
        alert('div #3!');
    }, true);

    document.querySelector("button").addEventListener("click", function(){
        alert('button!');
    }, true);

});
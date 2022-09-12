document.addEventListener("DOMContentLoaded", function(){
    
    function helloWorld(){
        alert("Hello World!");
    }

    document.getElementById("button").addEventListener("click", function(){
        helloWorld();
    });

});
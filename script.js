document.addEventListener("DOMContentLoaded", function(){
    
    function helloWorld(){
        alert("Hello World!");
    }

    document.getElementById("button").addEventListener("click", function(){
        
        if (document.getElementsByTagName("p")[0] == undefined){
            let p = document.createElement("p");

            p.textContent = "Hello World!";

            p.style.color = "red";
            p.style.fontStyle = "italic";
            p.style.fontWeight = "bold";
            p.style.fontSize = "21px";
            
            this.after(p);
        }else{
            document.getElementsByTagName("p")[0].classList.toggle("toggle");
        }

    });

});
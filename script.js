document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll("button").forEach(function(i){

        i.addEventListener("click", function(e){
            for (j of document.querySelectorAll("button")){
                j.classList.remove("clicked");
            }

            this.classList.add("clicked");

            document.querySelector("#container").scrollTo({top: this.offsetTop - 10, behavior: 'smooth'});
        });

    });

});
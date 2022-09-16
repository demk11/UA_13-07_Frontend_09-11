document.addEventListener("DOMContentLoaded", function(){


    // for (i of document.querySelectorAll("button")){
    //     i.addEventListener("click", function(){
    //         this.classList.toggle("clicked");
    //     });
    // }
    document.querySelector("#container").onscroll = function(e){
        console.log(this.scrollTop);
    };

    document.querySelectorAll("button").forEach(function(i){

        i.addEventListener("click", function(e){
            for (j of document.querySelectorAll("button")){
                j.classList.remove("clicked");
            }

            this.classList.add("clicked");

            document.querySelector("#container").scrollTop = this.offsetTop;
            console.log(e);
        });
    });

});
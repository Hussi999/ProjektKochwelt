document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const thankYouBox = document.getElementById("thankYouBox");
    const contactForm = document.getElementById("contactForm");
    
    //nachricht anzeigen
    thankYouBox.classList.remove("hidden");
    thankYouBox.classList.add("show");
   
    //form none 
   contactForm.classList.add("hidden")
   
    //form leer 
    document.getElementById("contactForm").reset();
    
    
    
    // in 5 sekunden nachricht verschwunden
    setTimeout(() => {
        thankYouBox.classList.remove("hidden");
        thankYouBox.classList.add("hidden");

        contactForm.classList.remove("hidden");
    }, 5000);

    
});
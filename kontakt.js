document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const thankYouBox = document.getElementById("thankYouBox");
    const contactForm = document.getElementById("contactForm");
    
    thankYouBox.classList.remove("hidden");
    thankYouBox.classList.add("show");
   
   contactForm.classList.add("hidden")
   
    document.getElementById("contactForm").reset();
    
    
    setTimeout(() => {
        thankYouBox.classList.remove("hidden");
        thankYouBox.classList.add("hidden");

        contactForm.classList.remove("hidden");
    }, 5000);

    
});
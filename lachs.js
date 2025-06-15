
const basePortions = 4;
const ingredients = {
    lachs: { amount: 500, unit: "g" },
    essig: { amount: 30, unit: "ml" },
    zitronensaft: { amount: 30, unit: "ml" },
    wein: { amount: 45, unit: "ml" },
    oel: { amount: 4, unit: "EL" },
    zucker: { amount: 4, unit: "g" },
    kapern: { amount: 4, unit: "EL" },
};


document.getElementById("portionDiv").addEventListener("submit", function (event) {
    event.preventDefault();
   let portions =parseFloat(document.getElementById("portions").value);
   if (isNaN(portions) || portions <=0) {
    portions = 1;
    document.getElementById("portions").value = 1;
   }
    
    for (const key in ingredients) {
        const base = ingredients[key];
        const result = (base.amount / basePortions) * portions;
        document.getElementById(key).textContent = result + " " + base.unit;
    }
});

let yourName = "Amaury Acosta"
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

//set default values

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let ss = 0 // Sugar Sprinkle

//set variables for quantity
var gbQuantity;
var ccQuantity;
var ssQuantity;
var total = 0

var totalQuantity = document.getElementById('qty-total');
var gbQuantity = document.getElementById('qty-gb');
var ccQuantity = document.getElementById('qty-cc');
var ssQuantity = document.getElementById('qty-sugar');


//set event listener for Gingerbread cookie + button

document.getElementById("add-gb").addEventListener("click", function() {
    
    {
        gb++
    }
   
    gbQuantity.textContent = gb;
    
    total = total + 1;
    totalQuantity.textContent = total;
    
    console.log("Gingerbread + was clicked!")
})

// set even listener for Gingerbread cookie - button

document.getElementById("minus-gb").addEventListener("click", function() {
    if(gb > 0)
        {
            gb--
        } 
       
        gbQuantity.textContent = gb;
    
        total = total - 1;
        totalQuantity.textContent = total;
        
        console.log("Gingerbread - was clicked!")
    })

//set event listener for Chocolate chip cookie + button

document.getElementById("add-cc").addEventListener("click", function() {
    
    {
        cc++
    }
    
    ccQuantity.textContent = cc;
    
    total = total + 1;
    totalQuantity.textContent = total;
    
    console.log("Chocolate Chip + was clicked!")
})

//set event listener for Chocolate chip cookie - button

document.getElementById("minus-cc").addEventListener("click", function() 
{
    if(cc > 0)
    {
        cc--
    }
    
    ccQuantity.textContent = cc;
    total = total - 1;
    totalQuantity.textContent = total;
    
    console.log("Chocolate Chip - was clicked!")
})

//set event listener for Sugar Sprinkle cookies + button

document.getElementById("add-sugar").addEventListener("click", function() {
    
    {
        ss++
    }
    
    ssQuantity.textContent = ss;
    totalQuantity = document.getElementById("qty-total");
    total = total + 1;
    totalQuantity.textContent = total;
    
    console.log("Sugar Sprinkle + was clicked!")
})

//set event listener for Sugar Sprinkle cookies - button

document.getElementById("minus-sugar").addEventListener("click", function() {
    if ( ss > 0)
    {
        ss--
    }    
    
    ssQuantity.textContent = ss;
    
    total = total - 1;
    
    totalQuantity.textContent = total;
    
    console.log("Sugar Sprinkle - was clicked!")
})

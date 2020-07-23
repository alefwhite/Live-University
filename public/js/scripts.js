// Variaveis
let quantityValue = 0;
let itensList = [];

// List A = TRUE / B = FALSE
let list = true;

// Páginação
let page = 0;
const limit = 3;


const option = document.querySelector("#option_a");

option.addEventListener("click", () => {   
    document.querySelector("#sidebar2").classList.toggle("active");
});

const itemA = document.querySelector("#itemA").addEventListener("click", () => {
    list = true;
       
    itensList = [];

    document.getElementById("itens").innerHTML = "";

    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        itensList.push(`
            <div class="itens-content">
                <div class="number">${i + 1}</div>
                <div class="name">Item A${i + 1}</div>
            </div>
        `);

       
    };

    if(quantityValue > 0) {

        List();
    }

    document.getElementById("quantity").focus();
});

const itemB = document.querySelector("#itemB").addEventListener("click", () => {
    list = false;
    
    itensList = [];

    document.getElementById("itens").innerHTML = "";

    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        itensList.push(`
            <div class="itens-content">
                <div class="number">${i + 1}</div>
                <div class="name">Item B${i + 1}</div>
            </div>
        `);

       
    };

    if(quantityValue > 0) {

        List();
    }

    document.getElementById("quantity").focus();
});


const container = document.querySelector("#container");
container.onclick = function() {
    document.querySelector("#sidebar2").classList.add("active");
};


const quantity = document.getElementById("quantity");
quantity.addEventListener("change", () => {

    if(quantity.value > 0) {
        quantity.classList.remove("quantityEmpty");
    } else {
        quantity.classList.add("quantityEmpty"); 
    }

    itensList = [];

    document.getElementById("itens").innerHTML = "";

    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        list ? itensList.push(`
            <div class="itens-content">
                <div class="number">${i + 1}</div>
                <div class="name">Item A${i + 1}</div>
            </div>
        `)
        : itensList.push(`
            <div class="itens-content">
                <div class="number">${i + 1}</div>
                <div class="name">Item B${i + 1}</div>
            </div>
        `);
        
    }

    List();
    
});


function List() {
    let cont = 1;
    const itens = document.getElementById("itens");
    
    const angle = `
        <div class="itens-angle" id="angle">
            <div class="angle">
                <i class="fas fa-angle-left" id="left"></i>
                <i class="fas fa-angle-right" id="right"></i>
            </div>
        </div>
    `

    if(quantityValue > 0) {
        itens.innerHTML = angle;
    }

    for(let i = page * 3; i < itensList.length; i++) {      

        if(cont > 3) {
           
            break;
        }

        document.getElementById("angle").insertAdjacentHTML("beforebegin", itensList[i]);
       
        cont++;
    }
    
    const left = document.querySelector("#left").addEventListener("click", () => { 
        if(page > 0) {
            page -= 1;
            List();
        }    
        
    });
    
    const right = document.querySelector("#right").addEventListener("click", () => {
        console.log(page * 3)
        console.log(itensList.length)
        if((page + 1) * 3 <= itensList.length - 1) {
            page += 1;
            List();
        } else {
            alert("End of items")
        }
    });
};


const qtd = document.querySelector("#quantity");

if(!qtd.value || qtd.value === 0) {
    qtd.classList.add("quantityEmpty");
} 


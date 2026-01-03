const display =  document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");
const prevDisplay = document.getElementById("prev");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.value === "="){
            prevDisplay.value = display.value;
            display.value = eval(display.value);
        }else if (btn.value === "AC"){
            display.value = '';
            prevDisplay.value = '';
        }else if(btn.value === "DEL"){
            display.value = display.value.slice(0,-1);
        }else{
            display.value += btn.value;
        }
    });
});


// Keyboard Enabled Calculator
document.addEventListener("keydown", (e) => {
    if ("0123456789+-*/.".includes(e.key)) {
        e.preventDefault(); 
        display.value += e.key;
    }
    if (e.key === "Enter") {
        e.preventDefault(); 
        prevDisplay.value = display.value;
        display.value = eval(display.value);
    }
    if (e.key === "Backspace"){
        e.preventDefault(); 
        display.value = display.value.toString().slice(0,-1);
    }
    if (e.key === "Delete") {
        e.preventDefault(); 
        display.value = '';
        prevDisplay.value = '';
    }
});
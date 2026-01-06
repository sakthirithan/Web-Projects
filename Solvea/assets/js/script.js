const display =  document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");
const prevDisplay = document.getElementById("prev");

//SpeechToggle Condition 
let speechToggle = document.getElementById("speechToggle");
const icon = speechToggle.querySelector("i");
let isToggle = false;
console.log("Active Speech Turn on:",isToggle);

speechToggle.addEventListener("click", ()=> {
    isToggle = !isToggle;
    icon.classList.toggle("fa-volume-high");
    icon.classList.toggle("fa-volume-xmark");
    if(!isToggle){
        window.speechSynthesis.cancel();
    }

    console.log("isToggle",isToggle);
});

// Voice Enabled Calculator
let speech = new SpeechSynthesisUtterance();
let voiceBtn = document.getElementById("voiceBtn");

voiceBtn.addEventListener("click", () => {
    if (!display.value) return;

    window.speechSynthesis.cancel();
    setTimeout( ()=>{
        speech.text = display.value;
        window.speechSynthesis.speak(speech);
    },600);
});

//Speech Function for Buttons
function activeSpeech(text) {
    if (!text || !isToggle) return;

    window.speechSynthesis.cancel();
    setTimeout( ()=>{
        speech.text = text;
        window.speechSynthesis.speak(speech);
    },600);
};


//UI Button Activate
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
        activeSpeech(btn.value);
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
    activeSpeech(e.key);
});

//sidebar numbers
let size = 0;
const bar = document.getElementById('sizeSlider');
function sizeBar(){
    let number = document.getElementById('sidebar-Display');
    bar.addEventListener("input",(e) =>{
        number.textContent = `Size: ${e.target.value} x ${e.target.value}`;
        size = e.target.value;
    })
}

function decide_size(){
    
}

//drawings!!
const pads = document.querySelectorAll('.drawing-pad > .grid')
let check_eraser = false; //check if erase is on
let seletColor = "#000000"
let currentColor = "#000000";

function tools(){
    const color = document.getElementById('colorPicker');
    const eraser = document.getElementById('eraser');
    const clear = document.getElementById('clear');

    //clear
    clear.addEventListener("mousedown", () => {
        pads.forEach((pad)=>{
            pad.style.backgroundColor = "#ffffff"
        });
    })
    
    //eraser   
    eraser.addEventListener("mousedown",() => {
        check_eraser === false ? check_eraser = true:check_eraser =false;
        check_eraser ===true ? currentColor = "#ffffff" : currentColor = seletColor
    })

    //color
    color.addEventListener("input", (e)=>{
        seletColor = e.target.value;
    })
    
}

function addColor(){
    //draw
    pads.forEach((pad) => {
        pad.addEventListener("mousedown", () => {
            pad.style.backgroundColor = currentColor;    
        })
    })
}



sizeBar()
tools()
addColor()
decide_size()
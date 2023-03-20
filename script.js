//drawings!!
let pads = document.querySelectorAll('.drawing-pad > .grid')
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
        currentColor = seletColor;
    })
    
}

let isDrawing = false;
function addColor() {
    //draw
    pads.forEach((pad) => {
      pad.addEventListener("mousedown", () => isDrawing = true);
      pad.addEventListener("mouseup", () => isDrawing = false);
      pad.addEventListener("mousemove", () => {
        if (isDrawing === true) {
          pad.style.backgroundColor = currentColor;
        }
      });
    });
  }


//sidebar numbers
let padSize = 1;
let pastSize = 0;
const bar = document.getElementById('sizeSlider');
function sizeBar(){
    let number = document.getElementById('sidebar-Display');
    bar.addEventListener("input",(e) =>{
        number.textContent = `Size: ${e.target.value} x ${e.target.value}`;
        pastSize = padSize
        padSize = e.target.value;
        changePad()
    })
}


//change the size of the pad
const Dpad = document.querySelector(".drawing-pad")
function addPad(){
    const newItem = document.createElement('div');
    newItem.classList.add('grid')
    Dpad.appendChild(newItem)
}

function rmPad(){
    const item = Dpad.children[0];
    item.remove();
}

//used in sizeBar function
function changePad(){
    let different = Math.abs(padSize**2 - pastSize**2) ;
    Dpad.style.gridTemplateColumns = `repeat(${padSize},1fr)`;    
    if(Number(padSize)> Number(pastSize)){
        for(let i = 0; i < different; ++i){
            addPad()
        }
    }else if(Number(padSize) < Number(pastSize)){
        for(let i = 0; i < different; ++i){
            rmPad()
        }
    }
    pads = document.querySelectorAll('.drawing-pad > .grid')
    tools()
    addColor()
}



sizeBar()
tools()
addColor()


alert('Hello driver. Are you ready?')
// declare global variables at the top 
// here we instantiate (birth, create) a variable
let gasLevel= 0;

let traction= 1;

let battery= 0;

let parkingBreak = 1;

intStatus = 0

const modeInd = document.getElementById('mode');

const shifter = document.getElementById('bttn_shifter')

showTime();

function getGas(){
    if(gasLevel == 0){
        gasLevel= 1;
        // no need to use "let" here as the varible was called at the top of the page 
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src= './assets/images/bttn_gas_0.PNG'
        
    } else{
       gasLevel= 0; 
       document.getElementById('gas').src = './assets/images/gas0.png';
       document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.PNG';
    }
}

function tractionOff(){
    if(traction == 0){
        // button is "on" & traction is on
        traction= 1;
        document.getElementById('trac').src='./assets/images/trac0.PNG';
        document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    }
    // button is "off" and traction light is "on" - traction itself is "off"
    else{
       traction= 0; 
       document.getElementById('trac').src = './assets/images/trac1.PNG';
       document.getElementById('bttn_trac').src= './assets/images/bttn_trac_0.PNG';
    }
}

function chargeBattery(){
    if(battery == 0){
        battery= 1;
        document.getElementById('batt').src = './assets/images/batt1.PNG';
        document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.PNG';
    } else{
       battery= 0; 
       document.getElementById('batt').src= './assets/images/batt0.PNG'
       document.getElementById('bttn_batt').src='./assets/images/bttn_batt_1.PNG';
    }
}

function parkingBrakeOff(){
    // alert("On your mark.")
    if(parkingBreak == 0){
        parkingBreak= 1;
        document.getElementById('brake').src = './assets/images/p1.PNG';
        document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
    } 
    else{
       parkingBreak= 0; 
       document.getElementById('brake').src='./assets/images/p0.PNG'
       document.getElementById('bttn_park').src='./assets/images/bttn_park_0.PNG';
    }
}

function setMode() {
    console.log ('entered SetMode()')
    switch (intStatus) {
        case 0: 
            intStatus = 1;
            modeInd.innerText = 'ECO PRO';
            shifter.style.top = '720px';
            break;
        case 1:
            intStatus = 2;
            modeInd.innerText = 'COMFORT';
            shifter.style.top = '740px';
            break;
        case 2:
            intStatus = 3;
            modeInd.innerText = 'SPORT'
            shifter.style.top = '760px'
            break;
        default: 
            case 0: 
            intStatus = 0;
            modeInd.innerText = 'PARK';
            shifter.style.top = '700px';
            break;
    }
}


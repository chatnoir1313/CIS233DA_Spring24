alert('Hello driver. Are you ready?')
// declare global variables at the top 
// here we instantiate (birth, name) a variable
let gasLevel= 0;

let traction= 0;

let battery= 0;

let parkingBreak = 0;

showTime();

function getGas(){
    alert('Fuel up!')
    if(gasLevel == 0){
        gasLevel= 1;
        // no need to use "let" here as the varible was called at the top of the page 
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
    } else{
       gasLevel= 0; 
       document.getElementById('gas').src = './assets/images/gas0.png';
    }
}

function tractionOff(){
    alert("Let's start driftin")
    if(traction == 0){
        traction= 1;
        // no need to use "let" here as the varible was called at the top of the page 
        document.getElementById('trac').src = '.assets/images/trac1.PNG';
        document.getElementById('bttn_trac').src = 'assets/images/bttn_trac_1.png';
    } else{
       traction= 0; 
       document.getElementById('trc').src='./assets/images/trac0.PNG';
    }
}

function chargeBattery(){
    alert("Get set.")
    if(battery == 0){
        battery= 1;
        // no need to use "let" here as the varible was called at the top of the page 
        document.getElementById('batt').src = '.assets/images/batt1.PNG';
        document.getElementById('bttn_batt').src = 'assets/images/bttn_batt_1.PNG';
    } else{
       battery= 0; 
       document.getElementById('batt').src='./assets/images/bttn_batt_1.PNG';
    }
}

function parkingBreakOff(){
    alert("On your mark.")
    if(parkingBreak == 0){
        parkingBreak= 1;
        // no need to use "let" here as the varible was called at the top of the page 
        document.getElementById('break').src = 'assests/images/p0.PNG';
        document.getElementById('bttn_park').src = 'assests/images/bttn_park_0.PNG';
    } else{
       battery= 0; 
       document.getElementById('break').src='./assets/images/bttn_park_1.PNG';
    }
}
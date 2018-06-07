'use strict';

const canvas = document.querySelector('#canvas');

let time = 2000, init_state = [], i = 0;

let getTimeStamp = () => {
    return new Date().getTime()
};

const genColor = () => {
    let color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    return color;
};

const makeGrid = () => {
    while (i < 4*4) {
        //store time, as the "previous timestamp"
        init_state.push({
            timestamp: getTimeStamp()
        });
        i++;
    }

    //make a 4x4 table
    let tr, td;
    for (let i = 0; i < 4; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < 4; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    } 
}

setInterval(() => {
    let td = canvas.querySelectorAll('td');
    // fandom index 0-15
    let tdIndex = Math.floor(Math.random() * td.length);
    //get current time
    let now = getTimeStamp(); 
    let state = init_state[tdIndex];
    //compare time of one of cells
    if (now - state.timestamp >= time) {        
        td[tdIndex].style.backgroundColor = genColor();
        //update timestamp
        state.timestamp = now;
    }  
}, 250)

makeGrid();


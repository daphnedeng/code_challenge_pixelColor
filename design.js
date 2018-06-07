'use strict';

const canvas = document.querySelector('#canvas');

let time = 2000;

const makeGrid = () => {
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
    let tdLen = canvas.querySelectorAll('td').length;
    let num_columns = canvas.rows[0].cells.length;
    let tdIndex = Math.floor(Math.random() * tdLen);
    let randomtd = canvas.rows[Math.floor(tdIndex/num_columns)].cells[tdIndex % num_columns];
    randomtd.classList.toggle('table-cells');
}, 250)

makeGrid();


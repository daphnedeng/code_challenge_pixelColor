'use strict';

const canvas = document.querySelector('#canvas');

let
  time = 2000,
  init_state = [],
  i = 0,
  num_grid = 16;

let getTimeStamp = () => {
  return new Date().getTime()
};

const genColor = () => {
  let color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
  return color;
};

const makeGrid = () => {
  while (i < num_grid) {
    let color = genColor();
    init_state.push({
      id: i,
      timestamp: getTimeStamp()      
    });
    i++
  }
  init_state.forEach(element => {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.timestamp = element.timestamp;
    cell.id = element.id
    canvas.appendChild(cell);
  });
}

setInterval(() => {

  let tdIndex, now; 
  let td = canvas.querySelectorAll('.cell');

  do {
    //keep searching until find one that pass 2 seconds
    tdIndex = Math.floor(Math.random() * num_grid);
    now = getTimeStamp(); 
    let diff = now - td[tdIndex].timestamp;
    if(diff > time) {
      break;
    }
  } while (true);

  //change background color     
  td[tdIndex].style.backgroundColor = genColor();
  //update timestamp
  td[tdIndex].timestamp = now;
  
}, 250)

makeGrid();

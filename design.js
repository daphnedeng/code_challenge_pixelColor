const canvas = document.querySelector('#canvas');
let timer = 2000;

const color = () => {
    return '#FF00AA';
}

const makeGrid = () => {
    let tr, td;
    for (let i = 0; i < 4; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < 4; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute('class', 'table-cells')
        }
    }   
}

setInterval(() => {
    let cells = document.querySelectorAll('.table-cells');
       timer -= 1000;
       /* if (current color === previous color) {
           return;
        } elseif (timer <= 0) {
            currentColor = color();
            one of the cell.style.backgroundColor = currentColor;
            previousColor = currentColor;
        } else {
            return;
        }*/
}, 1000);


makeGrid();
color();
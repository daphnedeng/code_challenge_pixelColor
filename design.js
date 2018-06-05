const canvas = document.querySelector('#canvas');

const colors = () => {
    const letters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
}

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

const changeColor = () => {
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.backgroundColor = colors();
    });
}


makeGrid();
changeColor();
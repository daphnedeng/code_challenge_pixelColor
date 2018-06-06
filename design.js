/* ======= Model ======= */
const data = {
    newColor: '#FF00AA',
    currentCell: null,
    cells: [
        {
            color: '#d6f5ff',
            time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // },
        // {
        //     color: '#d6f5ff',
        //     time: 2000
        // }
        }
    ]
};

/* ======= Controller ======= */
const controller = {

    init: function() {
        data.currentCell = data.cells[0];
        updateColor.init();
        grid.init();
    },

    getCurrentCell: function() {
        return data.currentCell;
    },

    getNewColor: function() {
        return data.newColor;
    },

    setCurrentCell: function(cell) {
        data.currentCell = cell;
    },

    updateCell: function() {
        grid.render();
    }
};


/* ======= View ======= */
const grid = {

    init: function() {
        this.canvas = document.querySelector('#canvas');
        this.render();
    },

    render: function() {
        let tr, td;
        let currentCell = controller.getCurrentCell();
        for (let i = 0; i < 4; i++) {
            tr = document.createElement('tr');
            canvas.appendChild(tr);
            for (let j = 0; j < 4; j++) {
                td = document.createElement('td');
                tr.appendChild(td);
                td.style.backgroundColor = currentCell.color;
                td.setAttribute('class', 'table-cells');
            }
        }  
    }    
};

const updateColor = {

    init: function() {
        this.cells = document.querySelectorAll('table-cells');
        this.render();
    },

    render: function() {

        let newColor = controller.getNewColor();
        let currentCell = controller.getCurrentCell(); 
        let previousColor = currentCell.color;
        let timer = currentCell.time;

        setInterval(() => {
            timer -= 250;
            if (previousColor === newColor) {
                return;
            } else if (timer <= 0) {                
                previousColor = newColor;
                return function(newCell) {
                    controller.setCurrentCell(newCell);
                    grid.render();
                }
            } else {
                return;
            }
        }, 250)
    }  
};

/* ======= Go! ======= */
controller.init();
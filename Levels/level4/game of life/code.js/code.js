function make2DArray(col, rows) {
    let arr = new Array(col);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let col;
let rows;
let resolution = 10;
let frame = 50;

function setup() {
    let cnv = createCanvas(1200, 800);
    cnv.position(((windowWidth - width) / 2), ((windowHeight - height) / 2))

    setInterval(drawing, frame)

    col = width / resolution;
    rows = height / resolution;

    grid = make2DArray(col, rows)


    for (var i = 0; i < col; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = 0;

        }
    }
    for (var i = 0; i < rows; i++)[
        grid[1][i] = 1
    ]



}




function draw() {
    background(0);
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255);
                stroke(0)
                rect(x, y, resolution - 1, resolution - 1)

            }
        }
    }


}

function drawing() {
    let next = make2DArray(col, rows)
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < rows; j++) {

            let state = grid[i][j];
            // let sum = 0
            let neighbors = countNeighbors(grid, i, j)
            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }

        }
    }
    grid = next;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
            let columnas = (x + i + col) % col;
            let filas = (y + j + rows) % rows;

            sum += grid[columnas][filas];
        }
    }

    sum -= grid[x][y];
    return sum;
}

setInterval(checkIfClear, 5000)

function checkIfClear(){
    let total = 0;
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < rows; j++) {
            total += grid[i][j]
        }
    }

    if(total == 0){
        console.log('jacked!!!')
        location.replace("../../../Enviroment/lay_out/index.html")
    }
}
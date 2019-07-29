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
let frame = 10;

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
    grid[2][1] = 1;
    grid[2][2] = 1;
    grid[2][3] = 1;
    grid[1][3] = 1;
    grid[0][2] = 1;

    grid[20][1] = 1;
    grid[20][2] = 1;
    grid[20][3] = 1;
    grid[19][3] = 1;
    grid[18][2] = 1;

    grid[40][1] = 1;
    grid[40][2] = 1;
    grid[40][3] = 1;
    grid[39][3] = 1;
    grid[38][2] = 1;

    grid[2][20] = 1;
    grid[2][21] = 1;
    grid[2][22] = 1;
    grid[1][22] = 1;
    grid[0][21] = 1;

    grid[40][20] = 1;
    grid[40][21] = 1;
    grid[40][22] = 1;
    grid[39][22] = 1;
    grid[38][21] = 1;

    grid[40][60] = 1;
    grid[40][61] = 1;
    grid[40][62] = 1;
    grid[39][62] = 1;
    grid[38][61] = 1;

    grid[2][60] = 1;
    grid[2][61] = 1;
    grid[2][62] = 1;
    grid[1][62] = 1;
    grid[0][61] = 1;

    grid[60][60] = 1;
    grid[60][61] = 1;
    grid[60][62] = 1;
    grid[59][62] = 1;
    grid[58][61] = 1;

    grid[50][50] = 1;
    grid[50][51] = 1;
    grid[50][52] = 1;
    grid[49][52] = 1;
    grid[48][51] = 1;

    grid[30][50] = 1;
    grid[30][51] = 1;
    grid[30][52] = 1;
    grid[29][52] = 1;
    grid[28][51] = 1;

    grid[30][30] = 1;
    grid[30][31] = 1;
    grid[30][32] = 1;
    grid[29][32] = 1;
    grid[28][31] = 1;

    grid[10][30] = 1;
    grid[10][31] = 1;
    grid[10][32] = 1;
    grid[9][32] = 1;
    grid[8][31] = 1;


    grid[10][60] = 1;
    grid[10][61] = 1;
    grid[10][62] = 1;
    grid[9][62] = 1;
    grid[8][61] = 1;

    grid[10][40] = 1;
    grid[10][41] = 1;
    grid[10][42] = 1;
    grid[9][42] = 1;
    grid[8][41] = 1;

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
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
let frame = 70;

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

    grid[45][30] = 1;
    grid[45][31] = 1;
    grid[45][32] = 1;
    grid[45][36] = 1;
    grid[45][37] = 1;
    grid[45][38] = 1;

    grid[46][30] = 1;
    grid[46][33] = 1;
    grid[46][35] = 1;
    grid[46][38] = 1;
    grid[46][41] = 1;

    grid[47][30] = 1;
    grid[47][38] = 1;
    grid[47][41] = 1;
    grid[47][42] = 1;
    grid[47][43] = 1;
    grid[47][44] = 1;

    grid[48][30] = 1;
    grid[48][38] = 1;
    grid[48][42] = 1;
    grid[48][43] = 1;
    grid[48][44] = 1;

    grid[49][31] = 1;
    grid[49][33] = 1;
    grid[49][35] = 1;
    grid[49][37] = 1;
    grid[49][42] = 1;
    grid[49][46] = 1;

    grid[50][31] = 1;
    grid[50][33] = 1;
    grid[50][35] = 1;
    grid[50][37] = 1;
    grid[50][44] = 1;
    grid[50][45] = 1;
    grid[50][46] = 1;

    grid[51][32] = 1;
    grid[51][36] = 1;
    grid[51][42] = 1;
    grid[51][47] = 1;

    grid[52][31] = 1;
    grid[52][32] = 1;
    grid[52][33] = 1;
    grid[52][34] = 1;
    grid[52][35] = 1;
    grid[52][36] = 1;
    grid[52][37] = 1;
    grid[52][43] = 1;
    grid[52][44] = 1;
    grid[52][45] = 1;
    grid[52][46] = 1;
    grid[52][47] = 1;
    grid[52][48] = 1;

    grid[53][48] = 1;
    grid[53][49] = 1;

    grid[54][30] = 1;
    grid[54][31] = 1;
    grid[54][34] = 1;
    grid[54][37] = 1;
    grid[54][38] = 1;
    grid[54][43] = 1;
    grid[54][44] = 1;
    grid[54][48] = 1;

    grid[55][27] = 1;
    grid[55][28] = 1;
    grid[55][31] = 1;
    grid[55][33] = 1;
    grid[55][35] = 1;
    grid[55][37] = 1;
    grid[55][39] = 1;
    grid[55][42] = 1;
    grid[55][45] = 1;
    grid[55][46] = 1;

    grid[56][26] = 1;
    grid[56][30] = 1;
    grid[56][31] = 1;
    grid[56][34] = 1;
    grid[56][36] = 1;
    grid[56][38] = 1;
    grid[56][39] = 1;
    grid[56][44] = 1;
    grid[56][46] = 1;

    grid[57][25] = 1;
    grid[57][29] = 1;
    grid[57][41] = 1;
    grid[57][45] = 1;
    grid[57][46] = 1;
    grid[57][47] = 1;

    grid[58][25] = 1;
    grid[58][31] = 1;
    grid[58][32] = 1;
    grid[58][33] = 1;
    grid[58][34] = 1;
    grid[58][35] = 1;
    grid[58][36] = 1;
    grid[58][37] = 1;
    grid[58][38] = 1;
    grid[58][39] = 1;
    grid[58][40] = 1;
    grid[58][41] = 1;
    grid[58][47] = 1;

    grid[59][25] = 1;
    grid[59][26] = 1;
    grid[59][27] = 1;
    grid[59][31] = 1;
    grid[59][43] = 1;
    grid[59][47] = 1;

    grid[60][26] = 1;
    grid[60][28] = 1;
    grid[60][33] = 1;
    grid[60][34] = 1;
    grid[60][36] = 1;
    grid[60][38] = 1;
    grid[60][41] = 1;
    grid[60][42] = 1;
    grid[60][46] = 1;

    grid[61][26] = 1;
    grid[61][27] = 1;
    grid[61][30] = 1;
    grid[61][33] = 1;
    grid[61][35] = 1;
    grid[61][37] = 1;
    grid[61][39] = 1;
    grid[61][41] = 1;
    grid[61][44] = 1;
    grid[61][45] = 1;

    grid[62][24] = 1;
    grid[62][28] = 1;
    grid[62][29] = 1;
    grid[62][34] = 1;
    grid[62][35] = 1;
    grid[62][38] = 1;
    grid[62][41] = 1;
    grid[62][42] = 1;

    grid[63][23] = 1;
    grid[63][24] = 1;

    grid[64][24] = 1;
    grid[64][25] = 1;
    grid[64][26] = 1;
    grid[64][27] = 1;
    grid[64][28] = 1;
    grid[64][29] = 1;
    grid[64][35] = 1;
    grid[64][36] = 1;
    grid[64][37] = 1;
    grid[64][38] = 1;
    grid[64][39] = 1;
    grid[64][40] = 1;
    grid[64][41] = 1;

    grid[65][25] = 1;
    grid[65][30] = 1;
    grid[65][36] = 1;
    grid[65][40] = 1;

    grid[66][26] = 1;
    grid[66][27] = 1;
    grid[66][28] = 1;
    grid[66][35] = 1;
    grid[66][37] = 1;
    grid[66][39] = 1;
    grid[66][41] = 1;

    grid[67][26] = 1;
    grid[67][30] = 1;
    grid[67][35] = 1;
    grid[67][37] = 1;
    grid[67][39] = 1;
    grid[67][41] = 1;

    grid[68][28] = 1;
    grid[68][29] = 1;
    grid[68][30] = 1;
    grid[68][34] = 1;
    grid[68][42] = 1;

    grid[69][28] = 1;
    grid[69][29] = 1;
    grid[69][30] = 1;
    grid[69][31] = 1;
    grid[69][34] = 1;
    grid[69][42] = 1;

    grid[70][31] = 1;
    grid[70][34] = 1;
    grid[70][37] = 1;
    grid[70][39] = 1;
    grid[70][42] = 1;

    grid[71][34] = 1;
    grid[71][35] = 1;
    grid[71][36] = 1;
    grid[71][40] = 1;
    grid[71][41] = 1;
    grid[71][42] = 1;




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
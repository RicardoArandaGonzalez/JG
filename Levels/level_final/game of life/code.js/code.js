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
    document.getElementById("stop").onclick = function () {
        alert("Hello! I am an alert box!");
    }


    document.getElementById("generateRandom").onclick = function () {
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < rows; j++) {
                grid[i][j] = floor(random(2));

            }
        }
    }
    document.getElementById("glider").onclick = function () {

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

    document.getElementById("gun").onclick = function () {
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < rows; j++) {
                grid[i][j] = 0;
            }
        }

        grid[1][20] = 1;     
        grid[1][21] = 1;     
        grid[2][20] = 1;     
        grid[2][21] = 1;

        grid[5][20] = 1;
        grid[5][21] = 1;
        grid[5][22] = 1;
        grid[6][20] = 1;
        grid[6][21] = 1;
        grid[6][22] = 1;


        grid[10][18] = 1;
        grid[10][19] = 1;
        grid[10][23] = 1;
        grid[10][24] = 1;
        grid[11][19] = 1;
        grid[11][20] = 1;
        grid[11][21] = 1;
        grid[11][22] = 1;
        grid[11][23] = 1;
        grid[12][20] = 1;
        grid[12][21] = 1;
        grid[12][22] = 1;
        grid[13][21] = 1;

        grid[20][22] = 1;
        grid[21][23] = 1;
        grid[21][24] = 1;
        grid[22][22] = 1;
        grid[22][23] = 1;

        grid[27][22] = 1;
        grid[27][21] = 1;
        grid[27][17] = 1;
        grid[27][16] = 1;
        grid[28][20] = 1;
        grid[28][19] = 1;
        grid[28][18] = 1;
        grid[29][17] = 1;
        grid[29][21] = 1;
        grid[30][20] = 1;
        grid[30][18] = 1;
        grid[31][19] = 1;

        grid[35][19] = 1;
        grid[35][18] = 1;
        grid[36][18] = 1;
        grid[36][19] = 1;
       
        
    }
    document.getElementById("wall").onclick = function () {
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
    document.getElementById("wall2").onclick = function () {
        for (var i = 0; i < col; i++) {
            for (var j = 0; j < rows; j++) {
                grid[i][j] = 0;

            }
        }
        for(var i = 0;i < rows; i++)[
            grid[1][i] = 1
        ]

    }

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

function drawing(){
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
class Player {

    constructor() {

        this.body = createVector(floor(w / 2), floor(h / 2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        this.body.x += this.xdir;
        this.body.y += this.ydir;
    }



    borderLateralColition() {
        let x = this.body.x;
        if (x > w - 2 || x < 1) {
            return true;
        }
        return false;
    }

    borderVerticalColition() {
        let y = this.body.y;
        if (y > h - 2 || y < 1) {
            return true;
        }
        return false;
    }

    eat(pos) {
        let x = this.body.x;
        let y = this.body.y;
        if (x == pos.x && y == pos.y) {
            return true;
        }
        return false;
    }


    show() {
        fill(0);
        noStroke();
        rect(this.body.x, this.body.y, 1, 1)

    }

}
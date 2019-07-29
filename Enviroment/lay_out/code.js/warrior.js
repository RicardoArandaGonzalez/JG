const Warrior = function(x, y){
    this.x = x;
    this.y = y;
    this.img = document.getElementById('warrior')

}

Warrior.prototype.draw = function(){

}

Warrior.prototype.update = function(){
    console.log('warrior here!!!')
}
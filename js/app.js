

class Enemy{

    constructor(x, y, speed){
        this.sprite = 'images/enemy-bug.png'
        this.x = x
        this.y = y
        this.speed = speed
    }

    update(dt){  
        this.x += (dt * this.speed)

        if(this.x >= 400){
            this.x = 0
            window.location.reload();
        }
       
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{

    constructor(x, y){
        this.sprite = 'images/char-boy.png'
        this.x = x
        this.y = y
    }

    update(dt){
        allEnemies.forEach(el => {
            if(this.x < el.x + 50 && this.x > el.x - 70 && this.y <el.y + 60 && this.y > el.y - 80){ 
               this.x = 200;
               this.y = 400; 
              document.querySelector("body").style.backgroundColor = "red";
              alert("collision happend")
              document.location.reload()
        
               }
        });
        
    
    };

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyCode){
        
        if(keyCode == 'up' && this.y > 0){
            this.y = this.y - 100
        }
        if(keyCode == 'right' && this.x < 400){
            this.x = this.x + 100
        }
        if(keyCode == 'down' && this.y < 400){
            this.y = this.y + 100
        }
        
        if(keyCode == 'left' && this.x > 0){
            this.x = this.x - 100
        }


        if(this.y == 0){
            this.x = 200
            this.y = 400
            swal({
                title: "Good job, You Win!!",
                
                icon: "success",
                button: "play agin",
              });
        }
        
        
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player(200,400)
const E = new Enemy(0,100,100)
const E1 = new Enemy(0,200,110)

let allEnemies = []
allEnemies.push(E)
allEnemies.push(E1)



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
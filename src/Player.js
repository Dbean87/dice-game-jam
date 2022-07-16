export default class Player { 
    constructor(config){

        //object postion and size
        this.x = config.x || 64 ;
        this.y = config.y  || 64;
        this.width = config.width || 32 ;
        this.height = config.height || 32 ;  

        // movement/physics/collision
        this.vy = 1;
        this.vx = 0;
        this.speed = 0.8;
        this.grouded = false
        
        //object visuals
        this.color = 'red'
    }

    update(input){

        if(input == 'right'){
             this.vx += this.speed;
        }
        else if (input == 'left'){
            this.vx -=this.speed
        }

        if(input == 'up' && this.grouded == true){
       
            this.vy = -20
            this.grouded = false;
        }

        // physics  && collisions
        this.x+=this.vx; 
        this.vx *= 0.9; // slow player down
        if(this.vx < 0.5 && this.vx > -0.5) this.vx = 0; // stop player


        // falling? 
        if(this.grouded == false){

            this.y+=this.vy
            this.vy++
        } 

        // bottoms 
        if(this.y >= 480 - this.height) {
            this.grouded = true;
            this.vy = 0; 
            this.y = 480 -this.height
    
        }

        
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width)
    }
}
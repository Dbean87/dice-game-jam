console.log("input.js loaded")

export default class InputHandler { 
    constructor(){
        this.heldDirections = [];

        this.init();
        
    }

    init(){
        window.addEventListener('keydown', e => {this.handleInput(e)});
        window.addEventListener('keyup', e => {this.handleInput(e)});
    }

    handleInput(e){
        // console.log(e.key)

        const map = {
            'ArrowRight' : 'right',
            'ArrowLeft' : 'left',
            'ArrowDown' : 'down',
            'ArrowUp' : 'up',

            'd' : 'right',
            'a': 'left',
            's' : 'down',
            'w' : 'up',
        }
    
        if(e.type === 'keydown'){
            if(this.heldDirections.indexOf(map[e.key]) == -1 && map[e.key] != undefined){
                this.heldDirections.unshift(map[e.key])
                
            }
        //    console.log(this.heldDirections)
        }
    
        if(e.type === 'keyup'){
            let index = this.heldDirections.indexOf(map[e.key])
                this.heldDirections.splice(index, 1)
        }

    }
    get direction(){
        return this.heldDirections[0]
    }
    get directions(){
        return this.heldDirections
    }
}
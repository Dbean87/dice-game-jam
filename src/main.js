console.log('main jsloaded')


//canvas 
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')





//imports 
import DiceController from "./DiceController.js"
import InputHandler from "./InputHandler.js"
import Player from './Player.js'



// initialisation

const input = new InputHandler ();
const diceController = new DiceController({elementId: 'death-dice', buttonId: 'roll'});diceController.init();
const player = new Player({})




function gameLoop(){

    //UPDATE
    player.update(input.direction)


    //DRAW
    ctx.clearRect(0, 0, canvas.width, canvas.height)    //clear canvas
    player.draw(ctx)
    


    debugOutput(debugs)
    window.requestAnimationFrame(gameLoop)
}

// Start game
gameLoop();

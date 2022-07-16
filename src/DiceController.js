export default class DiceController { 
    constructor(config){
        this.element = document.getElementById(config.elementId)
        this.button = document.getElementById(config.buttonId)
        this.rolls = 0; 

    }

    init(){
        this.button.addEventListener('click', this.rollDice.bind(this))
        this.button.onmouseenter= function(){this.classList.add('hover')}
        this.button.onmouseleave= function(){this.classList.remove('hover')}
    }

    rollDice(){
        let rand = Math.ceil(Math.random()*6)
        this.element.setAttribute('data-face' ,rand )
        this.rolls++
        this.element.style.transform = `rotate(${this.rolls* 360}deg)`

    }
}
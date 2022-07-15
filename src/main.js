console.log('loaded')
const dice = document.getElementById('death-dice')
let rolls = 0


roll.onclick = function (){
    let rand = Math.ceil(Math.random()*6)
    console.log(rand)
    dice.setAttribute('data-face' ,rand )

    rolls++
    dice.style.transform = `rotate(${rolls* 360}deg)`

}

window.setInterval(()=> {
    if(!roll.classList.contains('hover'))roll.classList.toggle('animate')}, 3000)


roll.onmouseenter= function(){this.classList.add('hover')}
roll.onmouseleave= function(){this.classList.remove('hover')}
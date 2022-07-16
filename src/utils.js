
const debug = document.querySelector('.debug')
const debugs = []


function debugOutput(items){

    if(items.length){
        items.forEach(item => {
            let p = document.createElement('p')
            p.innerText = `${item.key} : ${item.value}`
            debug.appendChild(p)
        })
    }
}
console.log('loaded')

import DiceController from "./DiceController.js"
const diceController = new DiceController({elementId: 'death-dice', buttonId: 'roll'})
diceController.init();

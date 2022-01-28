// Modules - Encapsulated Code (only share minimum)
//CommonJS, every file is module (by default)


const names = require('./4-names');
const sayHi = require('./5-utils')
console.log(names); //{ john: 'john', peter: 'peter' }
const data = require('./6-alternative-flavor')

console.log(data);

require('./7-mind-grenade')
// sayHi(names.peter)

// sayHi(names.john)

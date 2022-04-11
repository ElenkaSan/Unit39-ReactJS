import foods from './foods';
import { choice, remove } from './helpers';


let RANDOMFRUIT = choice(foods);
console.log(`I'd like one ${RANDOMFRUIT}, please.`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log(`Delecious! May I have another?`);
 
let FRUITSLEFT = remove(RANDOMFRUIT, foods);
console.log(`I'm sorry we're all out. We have ${FRUITSLEFT.length} left.`);
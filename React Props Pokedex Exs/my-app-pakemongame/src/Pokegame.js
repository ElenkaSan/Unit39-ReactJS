import React from "react";
import Pokedex from "./Pokedex";

// function Pokegame(props) {
//     let hand1 = [];
//     let hand2 = [...props.pokemon];

//     while (hand1.length < hand2.length) {
//         let random = Math.floor(Math.random() * hand2.length);
//         let randCard = hand2.splice(random, 1)[0];
//         hand1.push(randCard);
//     }
//     let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
//     let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  
//     return (
//       <div>
//         <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
//         <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
//       </div>
//     );
// };

function makingIndexes(length, size){
  const ind1 = new Set()
  while (ind1.size < size) {
    const index= Math.floor(Math.random() * length)
    ind1.add(index)
  }
  const ind2 = new Set()
  while (ind2.size < size) {
    const index= Math.floor(Math.random() * length)
    if (!ind1.has(index)) {
      ind2.add(index)
    }
  }
  return [ind1, ind2]
}

function getHandsAndExp(ind1, ind2, pokemon) {
  const hand1 = [];
  const hand2 = [];
 
  ind1.forEach((index) => {
    hand1.push(pokemon[index])
  })
  ind2.forEach((index) => {
    hand2.push(pokemon[index])
  })

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  return [{hand:hand1, exp: exp1}, {hand:hand2, exp: exp2}]
}

function Pokegame(props) {
  const pokemon = props.pokemon;

  if(pokemon.length<2){
    return <div></div>
  }

  const size = pokemon.length % 2 == 0 ? pokemon.length / 2 : (pokemon.length - 1) / 2; 
  const [ind1, ind2] = makingIndexes(pokemon.length, size);

  const handsAndExp = getHandsAndExp(ind1, ind2, pokemon);
  const hand1 = handsAndExp[0]["hand"];
  const exp1 = handsAndExp[0]["exp"];

  const hand2 = handsAndExp[1]["hand"];
  const exp2 = handsAndExp[1]["exp"];


  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

Pokegame.defaultProps = {
    pokemon: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
};

export default Pokegame;

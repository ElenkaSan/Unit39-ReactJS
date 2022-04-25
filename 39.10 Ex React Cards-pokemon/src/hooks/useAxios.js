import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (url) => {
  const [state, setState] = useState([ ]);
  const addCard = async (name) => {
		const getUrl = name ? `${url}/${name}` : url;
		console.log(getUrl);
		const response = await axios.get(getUrl);
		setState((state) => [ ...state, { ...response.data, id: uuid() }]);
	};

  const resert = () => setState([]);

	return [ state, addCard, resert];
};

export default useAxios;



// function PokeDex() {
//     const [pokemon, setPokemon] = useState([]);
//     const addPokemon = async name => {
//       const response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${name}/`
//       );
//       setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
// };  return []
// }

// function CardTable() {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
//   return []};

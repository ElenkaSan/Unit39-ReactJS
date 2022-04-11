import React from 'react';
import Pokecard from './Pokecard';
import('./Pokedex.css');

function Pokedex(props) {
	let winner = null;
	if (props.isWinner) {
	  winner = <h1 className="Pokedex-winner">THIS HAND WINS!</h1>;
    }

	return (
		<div className="Pokedex">
			<h2 className="Pokedex-title">Pokedex</h2>
			<div>
				{props.pokemon.map((p) => 
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                )}
			</div>
			<h2 className="Pokedex-total">Total experience: {props.exp}</h2>
            {winner}
		</div>
	);
};

export default Pokedex;
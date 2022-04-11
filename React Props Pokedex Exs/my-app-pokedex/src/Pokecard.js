import React from 'react';
import('./Pokecard.css');

const pokeAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	const imgSource = `${pokeAPI}${props.id}.png`;
	return (
		<div className="Pokemon">
			<h3 className="Pokemon-name">{props.name}</h3>
			<img src={imgSource} alt=""/>
			<p>Type: {props.type}</p>
			<span>EXP: {props.exp}</span>
		</div>
	);
};

export default Pokecard;
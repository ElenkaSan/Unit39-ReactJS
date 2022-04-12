import React, { useState } from 'react';
import('./EightBall.css');

function EightBall(props) {
    const restart = () => {
        setColor('black');
        setMsg('Think of a Question!');
    }

    const [ color, setColor ] = useState('black');
	const [ msg, setMsg ] = useState('Think of a Question!');
    const { answers } = props;
	const random = () => Math.floor(Math.random() * answers.length) + 1;

	const change = () => {
        setColor(answers[random()].color);
		setMsg(answers[random()].msg);
	};

	return (
		<div> 
        <button 
        onClick={change} style={{ backgroundColor: color }} className="EightBall">
			<h3>{msg}</h3>
        </button> 
            <button onClick={restart} className="EightBall-btn">New Game</button>
		</div>
	);
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
};

export default EightBall;
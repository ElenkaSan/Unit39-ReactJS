import React, { useState, useEffect, useRef} from 'react';
import axios from "axios";
import Alert from "./Alert";
import './DisplaysCards.css';

const DisplaysCards  = () => {
    const [cardSrc, setCardSrc] = useState('');
    const [deck, setDeck] = useState([]);
    const interval = useRef(0);
    const [done, setDone] = useState(false);

	const [drawCardBtn, setDrawCardBtn ] = useState(true);

    useEffect(() => {
        async function getNewDeck() {
            const res= await axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=52`);
            setDeck((res.data.cards).map(({ image }) => image));
        };
        getNewDeck();
    }, []);


    useEffect(() => {
		if (drawCardBtn && !interval.current) {
        interval.current = setInterval(() => {
            if (deck.length !== 0) {
                setCardSrc(deck[0]);
                setDeck(deck.filter(img => img !== deck[0]));
            } else {
				setDone(true);
            }
        }, 700);

        return () => {
            clearInterval(interval.current);
            interval.current = null;
			setDone(false);
        }}
    }, [drawCardBtn, setDrawCardBtn, deck]);

    const buttonDraw = () => {
        setDrawCardBtn(draw => !draw);
    }

    return (
        <div className='DisplaysCards'>
            {done
                ? <Alert /> :
				( <button onClick={buttonDraw}> 
					{drawCardBtn ? 'STOP' : 'START'} DRAW A CARD!</button>
					 )}
			  <div>
				  <img className='DisplaysCards-cards' alt='' src={cardSrc}></img> 
			  </div> 
        </div>
    )
}
export default DisplaysCards;
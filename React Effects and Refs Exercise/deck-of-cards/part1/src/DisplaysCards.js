import React, { useState, useEffect} from 'react';
import axios from "axios";
import Alert from "./Alert";
import './DisplaysCards.css';

const DisplaysCards  = () => {
    const [cardSrc, setCardSrc] = useState('');
    const [deck, setDeck] = useState(null);
    const [counter, setCounter] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        async function getDeck() {
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=52`);
            setDeck(res.data);
        };
        getDeck();
    }, [setDeck]);

    const drawCard = async () => {
        setCardSrc(deck.cards[counter].image);
        setCounter(counter + 1);
        console.log(counter, deck.cards[counter]);
        if (counter === 51) {
            setDone(true);
            setCounter(0);
        }
    }

    return (
        <div className='DisplaysCards'>
            {done ?
                <Alert /> :
                (<button onClick={drawCard}>DRAW A CARD!</button>)}
            <div>
                <img className="DisplayCards-cards" alt="" src={cardSrc}></img>
            </div>
        </div>
    )

}
export default DisplaysCards;
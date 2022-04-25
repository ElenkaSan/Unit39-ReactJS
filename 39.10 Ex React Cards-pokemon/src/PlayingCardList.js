import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from './hooks/useAxios';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, resert] = useAxios(`https://deckofcardsapi.com/api/deck/new/draw/`);
  const handleClick = () => {
		addCard();
	};
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleClick}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
      <button className='PlayingCardList-btn' onClick={resert}>Clean Everything!</button>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;

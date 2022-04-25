import { useState } from 'react';

const useFlip = (initialState = true) => {
    const [isFacingUp, setIsFacingUp] = useState(initialState);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
};

export default useFlip;

// function PlayingCard({ front, back = backOfCard }) {
//     const [isFacingUp, setIsFacingUp] = useState(true);
//     const flipCard = () => {
//       setIsFacingUp(isUp => !isUp);
//     };
//     return []};

//     function PokemonCard({ front, back, name, stats }) {
//         const [isFacingUp, setIsFacingUp] = useState(true);
//         const flipCard = () => {
//           setIsFacingUp(isUp => !isUp);
//         };
//         return []};
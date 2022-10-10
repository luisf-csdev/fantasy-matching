import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver'
import logic from './game/gameLogic'

export default function MatchGame() {

    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(logic.createCardsFromItems())
    }, [])

    function restart() {
        logic.clearCards();
        setCards(logic.createCardsFromItems());
        setGameOver(false)
    }

    function handleFlip(card) {
        logic.flipCard(card.id, () => {
            setGameOver(true)
        }, () => {
            setCards([...logic.cards])
        })
        setCards([...logic.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}
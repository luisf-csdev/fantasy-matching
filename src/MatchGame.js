import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameWin from './components/GameWin'
import StartMenu from './components/StartMenu';
import Difficulty from './components/Difficulty';
import CountDown from './components/CountDown';
import logic from './game/gameLogic';

export default function MatchGame() {

    const [startMenu, setStartMenu] = useState(true);
    const [gameWin, setGameWin] = useState(false);
    const [countDown, setCountDown] = useState(false);
    const [showDifficulty, setShowDifficulty] = useState(false)
    const [currentDifficulty, setCurrentDifficulty] = useState()
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(logic.createCardsFromItems())
    }, [])

    function mainMenu() {
        setStartMenu(true);
        setGameWin(false);
        setShowDifficulty(false)
    }

    function startGame() {
        logic.clearCards();
        setCards(logic.createCardsFromItems());
        setStartMenu(false);
        setCountDown(true);
        setGameWin(false);
        setShowDifficulty(false);
    }

    function easy() {
        const EASY = (2 * 60 * 1000) - 1;
        setCurrentDifficulty(EASY)
        startGame()
    }

    function normal() {
        const NORMAL = (1.5 * 60 * 1000) - 1
        setCurrentDifficulty(NORMAL)
        startGame()
    }

    function hard() {
        const HARD = (1 * 60 * 1000) - 1 
        setCurrentDifficulty(HARD)
        startGame()
    }

    function difficulty() {
        setShowDifficulty(true);
        setStartMenu(false);
        setGameWin(false);
    }

    function handleFlip(card) {
        logic.flipCard(card.id, () => {
            setGameWin(true);
            setCountDown(false);
        }, () => {
            setCards([...logic.cards])
        })
        setCards([...logic.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <StartMenu show={startMenu} handleStart={difficulty} />
            <Difficulty show={showDifficulty} handleEasy={easy} handleNormal={normal} handleHard={hard} />
            <GameWin show={gameWin} handleRestart={startGame} handleMenu={mainMenu}></GameWin>
            <CountDown show={countDown} startCountdown={currentDifficulty} targetDate={difficulty} />
        </div>
    )
}
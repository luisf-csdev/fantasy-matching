import React, { useEffect, useState } from 'react';
import StartMenu from './components/StartMenu';
import Difficulty from './components/Difficulty';
import GameBoard from './components/GameBoard';
import CountDown from './components/CountDown';
import GameWin from './components/GameWin'
import logic from './game/gameLogic';

export default function MatchGame() {

    const [gameBoard, setGameBoard] = useState(false)
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
        setGameBoard(false)
    }

    function startGame() {
        logic.clearCards();
        setCards(logic.createCardsFromItems());
        setStartMenu(false);
        setShowDifficulty(false);
        setGameBoard(true);
        setCountDown(true);
        setGameWin(false);
    }

    function easy() {
        const EASY = (60 * 60 * 1000) - 1;
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
        <div id='container'>
            <StartMenu show={startMenu} handleStart={difficulty} />
            <Difficulty show={showDifficulty} handleEasy={easy} handleNormal={normal} handleHard={hard} />
            <GameBoard show={gameBoard} handleFlip={handleFlip} cards={cards}></GameBoard>
            <CountDown show={countDown} startCountdown={currentDifficulty} targetDate={difficulty} />
            <GameWin show={gameWin} handleRestart={startGame} handleMenu={mainMenu}></GameWin>
        </div>
    )
}
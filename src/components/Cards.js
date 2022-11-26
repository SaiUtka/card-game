import {Card} from "./Card";
import '../styles/cards-styles.css';
import {useState} from "react";
import {deckOfCards} from "../cards-db/cards";


function Cards() {

    const [cards, setCards] = useState(deckOfCards.sort(() => Math.random() - 0.5));
    const [prev, setPrev] = useState(null);
    const [click, setClick] = useState(0);
    const [moves, setMoves] = useState(15);

    const checkCard = (card) => {
        if (card.cardID === prev.cardID) {
            card.status = 'correct';
            prev.status = 'correct';
            setCards([...cards]);
            setPrev(null);

            setTimeout(() => {
                setClick(0);
                setMoves(moves + 1);
            }, 500);

        } else {
            card.status = 'wrong';
            prev.status = 'wrong';
            setCards([...cards]);

            setTimeout(() => {
                card.status = '';
                prev.status = '';
                setCards([...cards]);
                setPrev(null);
                setClick(0);
                setMoves(moves - 1);
            }, 1000)
        }
    };

    const handleClick = (card) => {
        if (!prev && !card.status && click < 2) {
            card.status = 'flipped';
            setCards([...cards]);
            setPrev(card);
            setClick(click + 1);

        } else if (!card.status && click < 2) {
            checkCard(card);
            setClick(click + 1);
        }
    };

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div className={'main-section'}>

            <div className={'options'}>
                <h3>Moves left - {moves}</h3>
                <div className={'options-btn'} onClick={handleRestart}>
                    Restart
                </div>
            </div>

            <div className={'cards__wrapper'}>
                {
                    cards.map(card => <Card key={card.id} card={card} handleClick={handleClick}/>)
                }

            </div>
        </div>
    );

}

export {Cards};
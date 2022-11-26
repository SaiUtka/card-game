function Card({card, handleClick}) {

    const cardClassName = card.status ? ' flipped ' + card.status : ' ';

    return (
        <div className={'card' + cardClassName}
        onClick={() => handleClick(card)}>
            <img src={card.image} alt="card"/>
        </div>
    );

}

export {Card};
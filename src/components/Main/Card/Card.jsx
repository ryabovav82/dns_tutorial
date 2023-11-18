import './Card.css';

const Card = (props) => {
    console.log(props);
    return(
        <div className='card'>
            <div className="card_up">
               <div className='cardNum'>{props.dataCard} </div>
               <img className="cardImg" src="./" alt=""/>
            </div>
            <div className="card_down">
                <img className="cardImg" src="img.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Card;
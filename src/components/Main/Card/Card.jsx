import './Card.css';

const Card = (props) => {
    let image = props.dataImage;
    return(
        <div className='card'>
            <div className="card_up">
               <div className='cardNum'>{props.dataId} </div>
               <img src={image} />
            </div>
            <div className="card_down">
                {props.dataText}
            </div>
        </div>
    )
}

export default Card;
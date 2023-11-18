import './MainPage.css';
import Card from '../Card/Card';


const MainPage = (props) => {

    return(
        <div className='displayFlex'>
            <Card dataCard={props.dataMain[0]}/>
            <Card dataCard={props.dataMain[1]}/>
            <Card dataCard={props.dataMain[2]}/>
        </div>
    )
}

export default MainPage;
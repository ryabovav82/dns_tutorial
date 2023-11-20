import './Chapter01.css';
import Card from '../Card/Card';


const Chapter01 = (props) => {
    return(
        <div className='displayFlex'>
            <Card dataId={props.dataMain[0].id[0]} dataImage={props.dataMain[0].image[0]} dataText={props.dataMain[0].text[0]}/>
            <Card dataId={props.dataMain[0].id[1]} dataImage={props.dataMain[0].image[1]} dataText={props.dataMain[0].text[1]}/>
            <Card dataId={props.dataMain[0].id[2]} dataImage={props.dataMain[0].image[2]} dataText={props.dataMain[0].text[2]}/>
            <Card dataId={props.dataMain[0].id[3]} dataImage={props.dataMain[0].image[3]} dataText={props.dataMain[0].text[3]}/>
        </div>
    )
}

export default Chapter01;
import { IValues } from '../../data/dto/tracking.dto';
import styles from '../css/card.module.css'
import { GetCardProps } from '../utils/funciones';

export type CardType = 
    | 'work' 
    | 'play' 
    | 'social'
    | 'selfCare' 
    | 'study' 
    | 'exercise';

interface Props {
    cardType : CardType;
    values   : IValues;
    title    : string;
}


const Card = ({ cardType, values, title } : Props) =>{
    const { bgColor, image } = GetCardProps(cardType);
    return (
        <div className={`${styles.card} ${styles[bgColor]}`}>
            <div className={styles.content_image}>
                <div className={`${styles.image} ${styles[image]}`}></div>
            </div>
            <div className={styles.body}>
                <header>
                    <h4>{title}</h4>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
                </header>
                <footer>
                    <h1>{values.current}hrs</h1> 
                    <span>Last Week - {values.previous}hrs</span>
                </footer>
            </div>
        </div>
    )
}



export default Card

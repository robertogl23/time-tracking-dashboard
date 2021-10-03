import styles from '../css/tracking.module.css'
import Card from './Card'
interface Props {
    
}

const Tracking = (props: Props) => {
    return (
        <>
            <Card cardType={"work"}/>
            <Card cardType={"play"}/>
            <Card cardType={"study"}/>
            <Card cardType={"exercise"}/>
            <Card cardType={"social"}/>
            <Card cardType={"selfCare"}/>   
        </>
    )
}

export default Tracking

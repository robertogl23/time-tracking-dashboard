import { useContext } from 'react'
import { TrackingContext } from '../context/TrackingContext'
import styles from '../css/tracking.module.css'
import Card from './Card'
interface Props {
    
}

const Tracking = (props: Props) => {
    const {trackingState} = useContext(TrackingContext)
    return (
        <>
            <Card 
                cardType={"work"} 
                values={trackingState.selectedValues.work}
                title={trackingState.valuesList[0].title}/>
            <Card 
                cardType={"play"} 
                values={trackingState.selectedValues.play}
                title={trackingState.valuesList[1].title}/>
            <Card 
                cardType={"study"} 
                values={trackingState.selectedValues.study}
                title={trackingState.valuesList[2].title}/>
            <Card 
                cardType={"exercise"} 
                values={trackingState.selectedValues.exercise}
                title={trackingState.valuesList[3].title}/>
            <Card 
                cardType={"social"} 
                values={trackingState.selectedValues.social}
                title={trackingState.valuesList[4].title}/>
            <Card 
                cardType={"selfCare"} 
                values={trackingState.selectedValues.selfCare}
                title={trackingState.valuesList[5].title}/>  
        </>
    )
}

export default Tracking

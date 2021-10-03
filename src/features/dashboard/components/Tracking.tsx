import styles from '../css/tracking.module.css'
import Card from './Card'
interface Props {
    
}

const Tracking = (props: Props) => {
    return (
        <div className={styles.grid_tracking}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Tracking

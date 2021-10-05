import styles from '../css/userProfile.module.css';
import image from '../../../shared/images/image-jeremy.png'
import { useContext, useState } from 'react';
import { TimeFrameType, TrackingContext } from '../context/TrackingContext';

interface ITimeFrames {
    daily    : boolean;
    weekly   : boolean;
    monthly  : boolean;
    lastType : TimeFrameType;
}

const UserProfile = () => {
    const { changeTimeFrame } = useContext(TrackingContext)
    const [state, setstate] = useState<ITimeFrames>(
        {
            daily    : true,
            monthly  : false,
            weekly   : false,
            lastType : 'daily'
        }
    )

    const handleClick = (type : TimeFrameType) => {
        const values : ITimeFrames = {
            ...state,
            [type] : true,
            [state.lastType]: false,
            lastType: type

        } as ITimeFrames;
        setstate(values)
        changeTimeFrame(type)
    }
    return (
        <div className={styles.profile}>
            <header className={styles.profile_header}>
                <div className={styles.profile_image}>
                    <img src={image} alt="jeremy" />
                </div>
                <div className={styles.profile_description}>
                    <span >Report for</span>
                    <h3>Jeremy Robson</h3>
                </div>
            </header>
            <div className={styles.profile_times}>
                <ul>
                    <li
                        onClick={() => handleClick('daily')}
                        className={`${state.daily && styles.selected}`}
                    >
                        Daily
                    </li>
                    <li
                        onClick={() => handleClick('weekly')}
                        className={`${state.weekly && styles.selected}`}
                    >
                        Weekly
                    </li>
                    <li
                        onClick={() => handleClick('monthly')}
                        className={`${state.monthly && styles.selected}`}
                    >
                        Mounthly
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfile

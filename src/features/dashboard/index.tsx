import Tracking from './components/Tracking';
import UserProfile from './components/UserProfile';
import styles from './css/dashboard.module.css';
import { TrackingProvider } from './context/TrackingProvaider';

const DashBoard = () => {
    return (
        <TrackingProvider>
            <section className={styles.dashboard}>
                <div className={styles.dashboard_layout}>
                    <div className={styles.details}>
                        <UserProfile/>
                    </div>
                    <Tracking/>
                </div>
            </section>
        </TrackingProvider>
    )
}

export default DashBoard

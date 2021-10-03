import Tracking from './components/Tracking';
import UserProfile from './components/UserProfile';
import styles from './css/dashboard.module.css';


const DashBoard = () => {
    return (
        <section className={styles.dashboard}>
            <div className={styles.dashboard_layout}>
                <section className={styles.userDetails}>
                    <UserProfile/>
                </section>
                <section className={styles.timeTracking}>             
                    <Tracking/>
                </section>
            </div>
        </section>
    )
}

export default DashBoard

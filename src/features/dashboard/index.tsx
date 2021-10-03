import Tracking from './components/Tracking';
import UserProfile from './components/UserProfile';
import styles from './css/dashboard.module.css';


const DashBoard = () => {
    return (
        <section className={styles.dashboard}>
            <div className={styles.dashboard_layout}>
                <div className={styles.details}>
                    <UserProfile/>
                </div>
                <Tracking/>
            </div>
        </section>
    )
}

export default DashBoard

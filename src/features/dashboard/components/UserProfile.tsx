import styles from '../css/userProfile.module.css';
import image from '../../../shared/images/image-jeremy.png'
const UserProfile = () => {
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
                    <li>Daily</li>
                    <li className={styles.selected}>Weekly</li>
                    <li>Mounthly</li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfile

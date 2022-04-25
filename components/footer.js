import styles from '../components/styles/footer.module.css'

export default function Footer(){
    return(
        <div className={styles.content}>
            <div className={styles.header}>
                Pera Akademi
            </div>
            <div className={styles.social}>
                <div className={styles.link}>
                    Instagram
                </div>
                <div className={styles.link}>
                    Facebook
                </div>
                <div className={styles.link}>
                    Youtube
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.link}>
                    İletişim
                </div>
                <div className={styles.link}>
                    KVKK Metni
                </div>
                <div className={styles.link}>
                    Hakkımızda
                </div>
            </div>
        </div>
    )
}
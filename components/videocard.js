import styles from './styles/video.module.css'
import Image from 'next/image'

export default function VideoCard(){
    return(
        <div className={styles.card} onClick={()=>{window.location.href="/videolar/1234"}}>
            <div className={styles.thumb}>
                <Image width={300} height={175} src="/thumb.webp"></Image>
            </div>
            <div className={styles.info}>
                <div className={styles.header}>Commodo enim culpa commodo magna adipisicing do enim duis. Elit eu non ea non mollit commodo do adipisicing. Ea officia dolore ullamco incididunt nisi elit elit dolore enim pariatur cillum excepteur. Occaecat est aute duis nulla culpa cillum occaecat laborum ea. Mollit non sit excepteur deserunt ullamco qui incididunt. Est enim veniam nostrud ipsum adipisicing excepteur.</div>
            </div>
                <h2 className={styles.label}>Ad id aliqua cillum exercitation occaecat ex cillum eu nisi ipsum tempor. Ipsum labore excepteur et nulla culpa consequat amet minim dolore enim do amet. Aliqua ea dolor veniam ipsum proident mollit enim esse dolore deserunt. Do eiusmod occaecat excepteur aliquip adipisicing nostrud commodo est. Cillum nostrud eiusmod magna dolor amet. Ipsum laboris ex magna labore.</h2>
        </div>
    )
}
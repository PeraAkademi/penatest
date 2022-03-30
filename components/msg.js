import styles from './styles/cs.module.css'
import Image from 'next/image'

export default function MSG(){
    return (
        <div className={styles.msgbox}>
            <div className={styles.ppicon}>
                <Image className={styles.icon2} width={32} height={32} src="/pp.jpg"></Image>
            </div>
            <div className={styles.msg}>
                <label className={styles.lblmsg}>Mollit esse officia aliquip elit ipsum sint reprehenderit sint aliquip anim in. Enim adipisicing proident excepteur sint. Eiusmod eiusmod labore incididunt cillum excepteur ipsum ad ut officia consectetur culpa culpa do laborum. Enim exercitation ex qui proident proident Lorem.</label>
            </div>
        </div>
    )
}
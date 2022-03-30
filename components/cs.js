import styles from '../components/styles/cs.module.css'
import Image from 'next/image'
export default function CS(){
    return(
        <div className={styles.card} onClick={()=>{window.location.href="/calismasalonu/1234"}}>
            <div className={styles.header}>
                <Image className={styles.image} width={40} height={40} src="/pp.jpg"></Image>
            </div>
            <div className={styles.info}>
                <label className={styles.h2}>Salon Adı</label>
                <label className={styles.h3}>Öğretmen Adı</label>
                <div className={styles.ct}>
                    <label className={styles.lbl}>
                        24
                        <Image width={24} height={24} src="/icons/ogrenci.svg"></Image>
                    </label>
                    <label className={styles.lbl}>
                        2
                        <Image width={24} height={24} src="/icons/ogretmen.svg"></Image>
                    </label>
                </div>
            </div>
        </div>
    )
}
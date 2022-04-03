import styles from '../components/styles/cs.module.css'
import Image from 'next/image'
export default function CS({tname,tpp,roomname,teachers,students,id}){
    return(
        <div className={styles.card} onClick={()=>{window.location.href=`/calismasalonu/${id}`}}>
            <div className={styles.header}>
                <Image className={styles.image} width={40} height={40} src="/pp.jpg"></Image>
            </div>
            <div className={styles.info}>
                <label className={styles.h2}>{roomname}</label>
                <label className={styles.h3}>{tname}</label>
                <div className={styles.ct}>
                    <label className={styles.lbl}>
                        {students}
                        <Image width={24} height={24} src="/icons/ogrenci.svg"></Image>
                    </label>
                    <label className={styles.lbl}>
                        {teachers}
                        <Image width={24} height={24} src="/icons/ogretmen.svg"></Image>
                    </label>
                </div>
            </div>
        </div>
    )
}
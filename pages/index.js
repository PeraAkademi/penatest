import styles from '../components/styles/index.module.css'
import Image from 'next/image'

export default function Index(){
    return(
        <div className="content1">
            <div className={styles.sec}>
                <div className={styles.secbtn} onClick={()=>{window.location.href="/videolar"}}>
                    <Image src="/icons/video.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Video Kütüphanesi</h2>
                </div>
                <div className={styles.secbtn} onClick={()=>{window.location.href="/calismasalonu"}}>
                    <Image src="/icons/kitap.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Çalışma Salonu</h2>
                </div>
                <div className={styles.secbtn}>
                    <Image src="/icons/materyal.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Materyaller</h2>
                </div>
            </div>
            <div className={styles.sec} style={{marginLeft:"20px",marginRight:"20px"}} onClick={()=>{window.location.href="/odakmodu"}}>
                <div className={styles.d1}>
                    <div className={styles.d2}>
                        <Image src="/icons/odak.svg" width={250} height={250} alt="odak"></Image>
                    </div>
                </div>
            </div>
            <div className={styles.sec}>
                <div className={styles.secbtn2}>
                    <Image src="/icons/rehberlik.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Rehberlik Servisi</h2>
                </div>
                <div className={styles.secbtn2}>
                    <Image src="/icons/serbest.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Free Mod</h2>
                </div>
                <div className={styles.secbtn2}>
                    <Image src="/icons/profil.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Profilim</h2>

                </div>
            </div>
        </div>
    )
}
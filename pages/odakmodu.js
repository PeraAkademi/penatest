import { deepCopy } from '@firebase/util'
import styles from '../components/styles/odak.module.css'

export default function OdakModu(){
    return(
        <div className="content2" style={{flexDirection:'row'}}>
            <div className={styles.sec}>
                <div className={styles.tool}>
                    <label className={styles.checklabel}>
                        Odak Modu
                        <input id='odakcb' className={styles.check} type="checkbox" onChange={checked}></input>
                        <div className={styles.checkback}>
                            <div className={styles.checkicon}>
                            </div>
                        </div>

                    </label>
                </div>
                <div className={styles.tool}>
                    <label className={styles.labeldd}>Çalışma
                        <select className={styles.select}>
                            <option>Bireysel</option>
                            <option>Grup</option>
                        </select>
                    </label>
                </div>
                <div className={styles.tool}>
                    <label className={styles.labeldd}>Programım
                        <select className={styles.select}>
                            <option>Seç</option>
                            <option>Seç</option>
                        </select>
                    </label>
                </div>
                <div className={styles.tool}>
                    <label className={styles.labeldd}>Zihin Haritası
                        <select className={styles.select}>
                            <option>Seç</option>
                            <option>Seç</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className={styles.sec}>
                <div className={styles.timer}>
                    <div id='minutes' className={styles.tick}>
                        10:00
                    </div>
                </div>
            </div>
        </div>
    )
    function checked(){
        const odakcb = document.getElementById("odakcb")
        const cd = document.getElementById("minutes")
        let startmin=10
        let time = startmin*60
        setInterval(ticker,1000)
        function ticker(){
            if(odakcb.checked){
                const minutes=Math.floor(time/60)
                let seconds = time%60
                if(seconds<10){
                    cd.innerHTML=`${minutes}:0${seconds}`
                }else if(seconds==0){
                    cd.innerHTML=`${minutes}:00`
                }else{
                    cd.innerHTML=`${minutes}:${seconds}`
                }
                time--
            }else{
                window.location.href="/odakmodu"
            }
        }
    }
}
import styles from '../components/styles/odak.module.css'

export default function OdakModu(){
    return(
        <div className="content2" style={{flexDirection:'row'}}>
            <div className={styles.sec}>
                <div className={styles.tool}>
                    <label className={styles.checklabel}>
                        Odak Modu
                        <input className={styles.check} type="checkbox"></input>
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
                    <div className={styles.tick}>
                        1
                    </div>
                    <div className={styles.tick}>
                        0
                    </div>
                    <div className={styles.tick2}>
                        :
                    </div>
                    <div className={styles.tick}>
                        0
                    </div>
                    <div className={styles.tick}>
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}
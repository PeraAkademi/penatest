import styles from './styles/cs.module.css'
import Image from 'next/image'

export default function MSG({frompp,fromname,fromdate,frommsg}){
    var timestamp = fromdate
    var d = new Date(timestamp)
    var h =d.getHours().toString()
    var m =d.getMinutes().toString()
    if(h.length!=2){
        h="0"+h
    }
    if(m.length!=2){
        m="0"+m
    }
    var t = h+":"+m
    return (
        <div className={styles.msgbox}>
            <div className={styles.ppicon}>
                <Image className={styles.icon2} width={32} height={32} src={`/${frompp}`}></Image>
            </div>
            <div className={styles.msg}>
                <label className={styles.lblname}>{fromname}</label>
                <label className={styles.lblmsg}>{frommsg}</label>
                <label className={styles.lbldate}>{t}</label>
            </div>
        </div>
    )
}
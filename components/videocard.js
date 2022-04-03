import styles from './styles/video.module.css'
import Image from 'next/image'
import { useEffect,useState } from 'react'

export default function VideoCard({name,info,thumb,id,date}){
    const [dt,setdt]=useState()
    useEffect(()=>{
        var timestamp = date*1000
        var d = new Date(timestamp)
        var t = d.getHours()+":"+d.getMinutes()+" "+d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()
        setdt(t)
    },[])
    return(
        <div className={styles.card} onClick={()=>{window.location.href=`/videolar/${id}`}}>
            <div className={styles.thumb}>
                <Image width={300} height={175} src={`/${thumb}`}></Image>
            </div>
            <div className={styles.info}>
                <h1 className={styles.header}>{name}</h1>
                <h2 className={styles.label}>{info}</h2>
                <h2 className={styles.lbldate}>{dt}</h2>
            </div>
                
        </div>
    )
}
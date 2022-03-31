import styles from './styles/menu.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function Menu({href}){
    const [link,setlink]=useState();
    useEffect(()=>{
        if(href=="/"){
            setlink("Ana Sayfa")
        }else if(href.startsWith("/videolar")){
            setlink("Video Kütüphanesi")
        }else if(href.startsWith("/odakmodu")){
            setlink("Odak Modu")
        }else if(href.startsWith("/calismasalonu")){
            setlink("Çalışma Salonu")
        }else if(href.startsWith("/girisyap")){
            setlink("Giriş Yap")
        }
        else{

        }
    },[])
    return(
        <div className={styles.ustmenu}>
            <div className={styles.menubtn} onClick={()=>{window.location.href="/"}}>
                <Image src="/icons/logowhite.svg" width={80} height={80} alt="logo"></Image>
                <h1 className={styles.h1}>Per a</h1>
            </div>
            <div className={styles.menubtn}>
                <h1 className={styles.h1}>{link}</h1>
                <div className={styles.submenu}>
                    <h1 className={styles.h1sub}>{link}</h1>
                    <div className="hr"></div>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/odakmodu"}}>
                        <Image src="/icons/odak.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Odak Modu</h1>
                    </div>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/videolar"}}>
                        <Image src="/icons/videowhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Video Kütüphanesi</h1>
                    </div>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/calismasalonu"}}>
                        <Image src="/icons/kitapwhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Çalışma Salonu</h1>
                    </div>
                    <div className={styles.subbtn}>
                        <Image src="/icons/materyalwhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Materyaller</h1>
                    </div>
                    <div className={styles.subbtn}>
                        <Image src="/icons/rehberlikwhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Rehberlik Servisi</h1>
                    </div>
                    <div className={styles.subbtn}>
                        <Image src="/icons/serbestwhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Free Mod</h1>
                    </div>
                    <div className={styles.subbtn}>
                        <Image src="/icons/profilwhite.svg" width={20} height={20}></Image>
                        <h1 className={styles.h1sub1}>Profilim</h1>
                    </div>
                </div>
            </div>
            <div className={styles.menubtn}>
                <Image src="/icons/search.svg" width={40} height={40} alt="logo"></Image>
            </div>
        </div>
    )
}
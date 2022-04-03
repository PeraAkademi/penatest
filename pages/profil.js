import styles from '../components/styles/profil.module.css'
import Image from 'next/image'
import { useEffect,useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, where,getDocs,getFirestore,limit,doc, getDoc } from "firebase/firestore";
import cookies from 'js-cookie'

export default function Profil(){
    const [user,setuser]=useState(cookies.get("username"))
    const [gprof,setgpropf]=useState(false)
    const [prof,setprof]=useState([])
    useEffect(()=>{
        if(!gprof){
            profget()
        }
    },[])
    return(
        <div className='content2'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Image className={styles.pp} src="/pp.jpg" width={100} height={100}></Image>
                    <h1 className={styles.username}>{prof.username}</h1>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/id.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        {prof.name}
                    </div>
                    <div className={styles.icon2}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/email.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        {prof.email}
                    </div>
                    <div className={styles.icon2}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/ogrenci.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        {prof.school}
                    </div>
                    <div className={styles.icon2}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/phone.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        {prof.phone}
                    </div>
                    <div className={styles.icon2}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
    async function profget(){
        const firebaseConfig = {
            apiKey: "AIzaSyCN4x-lrKvdmOkMsjJgDDaZo4NrUrrsafg",
            authDomain: "pera-1df14.firebaseapp.com",
            projectId: "pera-1df14",
            storageBucket: "pera-1df14.appspot.com",
            messagingSenderId: "572044304954",
            appId: "1:572044304954:web:8f698e2ac8ba04eefe8b03",
            measurementId: "G-2VSMBNZGL7"
          };
        const app = initializeApp(firebaseConfig);
        const db =getFirestore(app)
        const profilRef = doc(db,"users",user)
        const pss=await getDoc(profilRef)
        console.log(pss.data())
        setprof(pss.data())
        setgpropf(true)
    }
}
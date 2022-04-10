import styles from '../components/styles/index.module.css'
import Image from 'next/image'
import cookies from 'js-cookie'
import { useEffect,useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore,where,collection,query, doc, getDocs,updateDoc,arrayRemove, arrayUnion,onSnapshot } from "firebase/firestore";

export default function Index(){
    const [roomcheck,setroomcheck]=useState(false)
    const [user,setuser]=useState(cookies.get("username"))
    const [pp,setpp]=useState(cookies.get("pp"))
    const [w8room,setw8room]=useState(false)
    const [w8,setw8]=useState(String)
    useEffect(()=>{
        if(!roomcheck){
            roomget()
        }
    },[])
    return(
        <div className="content1">
            <div className={styles.sec}>
                <div className={styles.secbtn} onClick={()=>{window.location.href="/videolar"}}>
                    <Image src="/icons/video.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Video Kütüphanesi</h2>
                </div>
                {!w8room&&
                <div className={styles.secbtn} onClick={()=>{window.location.href="/calismasalonu"}}>
                    <Image src="/icons/kitap.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Çalışma Salonu</h2>
                </div>
                }
                {w8room&&
                <div className={styles.secbtnalert} onClick={()=>{window.location.href=`/calismasalonu/${w8}`}}>
                    <Image src="/icons/kitap.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Çalışma Salonu</h2>
                </div>
                }
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
                <div className={styles.secbtn2} onClick={()=>{window.location.href="/freemod"}}>
                    <Image src="/icons/serbest.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Free Mod</h2>
                </div>
                <div className={styles.secbtn2} onClick={()=>{window.location.href="/profil"}}>
                    <Image src="/icons/profil.svg" width={100} height={100} alt="video"></Image>
                    <h2 className={styles.h2}>Profilim</h2>

                </div>
            </div>
        </div>
    )
    async function roomget(){
        const firebaseConfig = {
            apiKey: "AIzaSyCN4x-lrKvdmOkMsjJgDDaZo4NrUrrsafg",
            authDomain: "pera-1df14.firebaseapp.com",
            projectId: "pera-1df14",
            storageBucket: "pera-1df14.appspot.com",
            messagingSenderId: "572044304954",
            appId: "1:572044304954:web:8f698e2ac8ba04eefe8b03",
            measurementId: "G-2VSMBNZGL7"
            };
        const app = initializeApp(firebaseConfig)
        const db =getFirestore(app)
        const q = query(collection(db,"rooms"),where("students","array-contains",{un:user,pp:pp}))
        const rss = await getDocs(q)
        const data=rss.docs.map((doc)=>{
            return{
                id:doc.id
            }
        })
        if(data.length>0){
            setw8room(true)
            setw8(data.map((d)=>d.id).toString())
        }
        setroomcheck(true)

    }
}
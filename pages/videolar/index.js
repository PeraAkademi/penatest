import styles from '../../components/styles/video.module.css'
import VideoCard from '../../components/videocard'
import { useState, useEffect } from 'react';
import cookies from 'js-cookie'
import { initializeApp } from "firebase/app"
import { collection, orderBy, query, getDocs,getFirestore,limit,doc,getDoc,addDoc,setDoc } from "firebase/firestore";

export default function Videolar(){
    const [admin,setadmin]=useState(false)
    const [cadmin,setcadmin]=useState(false)
    const [user,setuser]=useState(cookies.get("username"))
    const [videos,setvideos]=useState([])
    const [getvideos,setgetvideos]=useState(false)
    useEffect(()=>{
        if(!cadmin){
            getadmin()
        }
        if(!getvideos){
            getvideo()
        }
    },[])
    return(
        <div className="content3">
            <div className={styles.list}>
                {admin&&
                <div className={styles.card} style={{cursor:'default'}}>
                    <input id='link' className={styles.input2} placeholder='Video linki'></input>
                    <input id='name' className={styles.input2} placeholder='Video başlığı'></input>
                    <input id='info' className={styles.input2} placeholder='Video açıklaması'></input>
                    <button className={styles.btn} onClick={ekle}>Ekle</button>
                </div>
                }

                {videos.map((v)=>{
                    return(
                        <VideoCard 
                        key={v.id}
                        id={v.id}
                        name={v.name}
                        info={v.info}
                        thumb={v.thumb}
                        date={v.date}
                        link={v.link}></VideoCard>
                    )
                })}
                
            </div>
        </div>
    )
    async function getadmin(){
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
        const userRef=doc(db,"users",user)
        const uss = await getDoc(userRef)
        const a = uss.data().admin
        setadmin(a)
        setcadmin(true)
    }
    async function ekle(){
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
        const date=Date.now()/1000
        const link= document.getElementById("link").value
        const name= document.getElementById("name").value
        const info= document.getElementById("info").value
        const notes={}
        const teacher=user
        const docRef= await addDoc(collection(db,"videos"),{
            date,
            link,
            name,
            teacher,
            notes,
            info
        })
        alert("Video başarıyla eklendi")
        window.location.href="/videolar"
    }
    async function getvideo(){
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
        const videosRef = collection(db,"videos")
        const q = query(videosRef,orderBy("date","desc"),limit(50))
        const qss = await getDocs(q)
        const data = qss.docs.map((d)=>{
            return(
                {
                    id:d.id,
                    name:d.data().name,
                    info:d.data().info,
                    date:d.data().date,
                    link:d.data().link
                }
            )
        })
        setvideos(data)
        setgetvideos(true)
    }
}
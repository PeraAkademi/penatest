import CS from "../../components/cs"
import styles from '../../components/styles/cs.module.css'
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, where,getDocs,getFirestore,limit } from "firebase/firestore";
import { useState,useEffect } from "react";

export default function CalismaSalonu(){
    const [rooms,setrooms]=useState([])
    const [getrooms,setgetrooms]=useState(false)
    useEffect(()=>{
        if(!getrooms){
            getroom()
        }
    },[])
    return(
        <div className="content3">
            <div className={styles.list}>
                {rooms.map((r)=>{
                    return(
                        <CS key={r.id}
                        id={r.id}
                        tname={r.tname}
                        roomname={r.roomname}
                        teachers={r.teachers}
                        students={r.students}></CS>
                    )
                })}
            </div>
        </div>
    )
    async function getroom(){
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
        const roomsRef=collection(db,"rooms")
        const q = query(roomsRef,orderBy("date","asc"),limit(50))
        const rss = await getDocs(q)
        const data = rss.docs.map((d)=>{
            return(
                {
                    id:d.id,
                    roomname:d.data().roomname,
                    teachers:(d.data().teachers).length,
                    students:(d.data().students).length,
                    tname:d.data().tname
                }
            )
        })
        setrooms(data)
        setgetrooms(true)
    }
}
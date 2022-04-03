import styles from '../../components/styles/video.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,updateDoc,arrayRemove, arrayUnion } from "firebase/firestore";
import cookies from 'js-cookie'


export default function Video({v}){
    const [user,setuser]=useState(cookies.get("username"));
    const [vid,setvideo]=useState([])
    const [vget,setvget]=useState(false)
    const [not,setnot]=useState([])
    const [tdis,settdis]=useState("none")
    var timestamp = vid.date*1000
    var d = new Date(timestamp)
    var t = d.getHours()+":"+d.getMinutes()+" "+d.getDay()+"/"+d.getMonth()+"/"+d.getFullYear()
    useEffect(()=>{
        if(v && !vget){
            videoget()
        }
    })
    return(
        <div className="content2">
            <div className={styles.video}>
            <iframe className={styles.iframe} src={`https://www.youtube.com/embed/${vid.link}`}></iframe>
            <div className={styles.title}>
                {!vid.name &&
                <>
                <h2 className={styles.h11blur}>Öğretmen adı</h2>
                <h2 className={styles.h11blur}>Video adı</h2>
                <h2 className={styles.h22blur}>Video hakkında</h2>
                <h2 className={styles.h22blur}>27.12.1994</h2>
                </>
                }
                {vid.name &&
                <>
                <h2 className={styles.h11}>{vid.teacher}</h2>
                <h2 className={styles.h11} style={{fontWeight:'bold'}}>{vid.name}</h2>
                <h2 className={styles.h22}>{vid.info}</h2>
                <h2 className={styles.h22}>{t}</h2>
                </>
                }
            </div>
            <div className={styles.tools}>
                <div className={styles.toolbtn} onClick={tvis}>
                    <Image src="/icons/notekle.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Not Ekle</h1>
                </div>
                <div className={styles.toolbtn}>
                    <Image src="/icons/paylas.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Paylaş</h1>
                </div>
                <div className={styles.toolbtn}>
                    <Image src="/icons/oner.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Öner</h1>
                </div>
            </div>
            <div className={styles.tools} style={{display:tdis}}>
                <input id='note' className={styles.input} placeholder="Notunuzu giriniz"></input>
                <div className={styles.toolbtn} onClick={notkaydet}>
                    <Image src="/icons/save.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Kaydet</h1>
                </div>
            </div>
            <div className={styles.notes}>
                {not.map((x)=>{
                    return(
                    <div key={x.n} className={styles.note}>
                        <div className={styles.delete} onClick={()=>{var a={n:x.n,un:x.un}; deletenote(a)}}>
                            <Image className={styles.iconx} src="/icons/cancel.svg" width={16} height={16}></Image>
                        </div>
                        <h2 className={styles.h2}>{x.n}</h2>
                    </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
    function tvis(){
        if(tdis=="none"){
            settdis("flex")
        }else{
            settdis("none")
        }
    }
    async function notkaydet(){
        var note = document.getElementById("note").value
        var a ={un:user,n:note}
        if(note!=""){
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
            const videoRef=doc(db,"videos",v)
            await updateDoc(videoRef,{
                notes:arrayUnion(a)
            })
            document.getElementById("note").value=""
            settdis("none")
            videoget()
        }else{
            alert("Lütfen bir not giriniz")
        }

    }
    async function deletenote(a){
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
        const videoRef=doc(db,"videos",v)
        await updateDoc(videoRef,{
            notes:arrayRemove(a)
        })
        videoget()
    }
    async function videoget(){
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
        const videoRef = doc(db,"videos",v)
        const vss= await getDoc(videoRef)
        const notdb = vss.data().notes.map((x)=>{
            if(x.un==user){
                return{
                    un:x.un.toString(),
                    n:x.n.toString()
                }
            }
        })
        setnot(notdb)
        setvideo(vss.data())
        setvget(true)
    }

}
export async function getStaticPaths (){
    return{
        paths:[
            {params:{video:"404"}}
        ],
        fallback:true
    }
}
export async function getStaticProps(context){
    const {params} =context
    const v = await params.video

    return{
        props:{v}
    }
}
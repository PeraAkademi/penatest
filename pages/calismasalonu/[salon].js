import styles from '../../components/styles/cs.module.css';
import Image from 'next/image';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import cookies from 'js-cookie'
import { initializeApp } from "firebase/app";
import { getFirestore,collection, doc, getDoc,updateDoc,arrayRemove, arrayUnion,onSnapshot } from "firebase/firestore";
import MSG from '../../components/msg';

export default function Salon({s}){
    const router= useRouter()
    const [room,setroom]=useState([])
    const [roomget,setroomget]=useState(false)
    const [user,setuser]=useState(cookies.get("username"))
    const [pp,setpp]=useState(cookies.get("pp"))
    const [rtu,setrtu]=useState(false)
    const [t,sett]=useState(Array)
    const [msg,setmsg]=useState(Array)
    const [stu,setstu]=useState(Array)
    const [te,sette]=useState(cookies.get("t")||"false")
    useEffect(()=>{

    },[])
    return(
        <div className="content4">
            {!rtu &&
            <>
            {!s&&
                <button className={styles.loginbtn}>Hazırlanıyor</button>
            }
            {s&&
                <button className={styles.loginbtn} onClick={baglan}>Odaya Bağlan</button>
            }
            <div className={styles.container2}>
                <div className={styles.left}>
                    <div className={styles.sec}>
                        <Image className={styles.icon} width={32} height={32} src="/pp.jpg"></Image>
                        <div className={styles.plate}>
                            Sharkman
                        </div>
                    </div>
                    <div className={styles.sec}>
                        <Image className={styles.icon} width={32} height={32} src="/pp.jpg"></Image>
                        <div className={styles.plate}>
                            FlyingTurkman
                        </div>
                    </div>
                    <div className={styles.sec2}>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/profil.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/mic.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/logoutblue.svg" ></Image>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.sohbet}>
                    <MSG fromdate={27121995} frompp={"pp.jpg"} frommsg={"Do aute duis elit ut ullamco occaecat excepteur excepteur consectetur qui duis id consequat. Nulla id cupidatat nulla dolor id laborum aliquip. Minim consequat enim cupidatat nostrud incididunt qui dolore. Excepteur voluptate excepteur ex duis irure nulla velit incididunt dolore."} fromname={"Sharkman"}></MSG>
                    <MSG fromdate={27121995} frompp={"pp.jpg"} frommsg={"Do aute duis elit ut ullamco occaecat excepteur excepteur consectetur qui duis id consequat. Nulla id cupidatat nulla dolor id laborum aliquip. Minim consequat enim cupidatat nostrud incididunt qui dolore. Excepteur voluptate excepteur ex duis irure nulla velit incididunt dolore."} fromname={"Sharkman"}></MSG>
                    <MSG fromdate={27121995} frompp={"pp.jpg"} frommsg={"Do aute duis elit ut ullamco occaecat excepteur excepteur consectetur qui duis id consequat. Nulla id cupidatat nulla dolor id laborum aliquip. Minim consequat enim cupidatat nostrud incididunt qui dolore. Excepteur voluptate excepteur ex duis irure nulla velit incididunt dolore."} fromname={"Sharkman"}></MSG>
                    </div>
                    <div className={styles.chat}>
                        <input className={styles.input}></input>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/gonder.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/attachfile.svg"></Image>
                    </div>
                </div>
            </div>
            </>

            }
            {rtu&&
            <div className={styles.container}>
                <div className={styles.left}>
                    
                    {t.map((x)=>{
                        return(
                        <div className={styles.sec} key={"t"+x.un}>
                            <Image className={styles.icon} width={32} height={32} src="/pp.jpg"></Image>
                            <div className={styles.plate}>
                                {x.un}
                            </div>
                        </div>
                        )
                    })}
                    {stu.map((x)=>{
                        return(
                        <div className={styles.sec} key={"s"+x.un}>
                            <Image className={styles.icon} width={32} height={32} src="/pp.jpg"></Image>
                            <div className={styles.plate}>
                                {x.un}
                            </div>
                        </div>
                        )
                    })}
                    <div className={styles.sec2}>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/profil.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/mic.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/logoutblue.svg" onClick={gooffline}></Image>
                    </div>
                </div>
                <div className={styles.right}>
                    <div id='sohbet' className={styles.sohbet} onScroll={scrlcheck}>
                        {msg.map((m)=>{
                            return(
                                <MSG key={m.fromdate+m.fromname+m.frommsg} fromdate={m.fromdate} frompp={m.frompp} frommsg={m.frommsg} fromname={m.fromname}></MSG>
                            )
                        })}
                    </div>
                    <div id='scrlbtn' className={styles.scrlbtm} onClick={scrl}>
                        <Image className={styles.arrow} src="/icons/arrow.svg" width={30} height={30}></Image>
                    </div>    
                    <div className={styles.chat}>
                        <input id='msg' className={styles.input}></input>
                        <Image onClick={msgsend} className={styles.icon2} width={32} height={32} src="/icons/gonder.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/attachfile.svg"></Image>
                    </div>
                </div>
            </div>
            
            }
            
        </div>
    )
    function scrl(){
        const element = document.getElementById("sohbet")
        element.scrollTop=element.scrollHeight
    }
    function scrlcheck(){
        const element = document.getElementById("sohbet")
        if(element.scrollTop>500){
            document.getElementById("scrlbtn").style.display="none"
        }
        else{
            document.getElementById("scrlbtn").style.display="flex"
        }

    }
    async function msgsend(){
        const data = {
            frompp:"pp.jpg",
            fromdate:Date.now(),
            fromname:user,
            frommsg:document.getElementById("msg").value
        }
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
        const roomRef = doc(db,"rooms",s)
        await updateDoc(roomRef,{
            messages:arrayUnion(data)
        })
        document.getElementById("msg").value=""
        scrl()
    }
    async function baglan(){
        if(s){
            getroom()
            setrtu(true)
        }else{
            alert("Henüz bağlantı sağlanmadı. Lütfen tekrar deneyiniz.")
        }
    }
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
        const app = initializeApp(firebaseConfig)
        const db =getFirestore(app)
        const ld={un:user,pp:pp}
        const roomRef = doc(db,"rooms",s)
        if(t=="true"){
            await updateDoc(roomRef,{
                teachers:arrayUnion(ld)
            })
        }else{
            await updateDoc(roomRef,{
                students:arrayUnion(ld)
            })
        }
        const unsub = onSnapshot(doc(db,"rooms",s),(doc=>{
            const tlist = doc.data().teachers
            const mlist =doc.data().messages
            const slist =doc.data().students
            sett(tlist)
            setmsg(mlist)
            setstu(slist)
        }))
    }
    async function gooffline(){
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
        const roomRef = doc(db,"rooms",s)
        const ld={un:user,pp:pp}
        await updateDoc(roomRef,{
            students:arrayRemove(ld),
            teachers:arrayRemove(ld),
        })
        window.location.href="/"
    }
}
export async function getStaticPaths (){
    return{
        paths:[
            {params:{salon:"404"}}
        ],
        fallback:true
    }
}
export async function getStaticProps(context){
    const {params} =context
    const s = params.salon
    return{
        props:{s}
    }
}
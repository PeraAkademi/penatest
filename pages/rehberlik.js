import styles from '../components/styles/materyaller.module.css'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import cookies from 'js-cookie'
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc,updateDoc,arrayRemove, arrayUnion } from "firebase/firestore";

export default function Rehberlik(){
    const [program1,setprogram1]=useState([])
    const [program2,setprogram2]=useState([])
    const [program3,setprogram3]=useState([])
    const [program4,setprogram4]=useState([])
    const [program5,setprogram5]=useState([])
    const [program6,setprogram6]=useState([])
    const [program7,setprogram7]=useState([])
    const [getprog,setgetprog]=useState(false)
    const [user,setuser]=useState(cookies.get("username"))
    useEffect(()=>{
        if(!getprog){
            getprogram()
        }
    },[])
    return(
        <div className="content5">
            <div className={styles.container}>
                <div className={styles.header}>
                    Pazartesi
                </div>
                {program1 && program1.map((p)=>{
                    program1.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="pazartesi"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatpazartesi' placeholder='00:00' type="time">
                    </input>
                    <input id='programpazartesi' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatpazartesi").value
                        let program=document.getElementById("programpazartesi").value
                        let gun ="pazartesi"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    Salı
                </div>
                {program2 && program2.map((p)=>{
                    program2.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="sali"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatsali' placeholder='00:00' type="time">
                    </input>
                    <input id='programsali' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatsali").value
                        let program=document.getElementById("programsali").value
                        let gun ="sali"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    Çarşamba
                </div>
                {program3 && program3.map((p)=>{
                    program3.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="carsamba"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatcarsamba' placeholder='00:00' type="time">
                    </input>
                    <input id='programcarsamba' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatcarsamba").value
                        let program=document.getElementById("programcarsamba").value
                        let gun ="carsamba"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    Perşembe
                </div>
                {program4 && program4.map((p)=>{
                    program4.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="persembe"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatpersembe' placeholder='00:00' type="time">
                    </input>
                    <input id='programpersembe' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatpersembe").value
                        let program=document.getElementById("programpersembe").value
                        let gun ="persembe"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    Cuma
                </div>
                {program5 && program5.map((p)=>{
                    program5.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="cuma"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatcuma' placeholder='00:00' type="time">
                    </input>
                    <input id='programcuma' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatcuma").value
                        let program=document.getElementById("programcuma").value
                        let gun ="cuma"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    Cumartesi
                </div>
                {program6 && program6.map((p)=>{
                    program6.sort((a,b)=>a.saat.localeCompare(b.saat))
                    return(
                    <div className={styles.prog} key={"p"+p.saat+p.program}>
                        <div className={styles.time}>
                            {p.saat}
                        </div>
                        <label className={styles.input2}>{p.program}</label>
                        <Image className={styles.icon} src="/icons/cancelblack.svg" width={30} height={30}
                        onClick={()=>{
                            let gun="cumartesi"
                            let saat=p.saat
                            let program=p.program
                            deleteprog({gun,saat,program})
                        }}
                        ></Image>
                    </div>
                    )

                })}

                <div className={styles.prog}>
                    <input id='saatcumartesi' placeholder='00:00' type="time">
                    </input>
                    <input id='programcumartesi' className={styles.input2} placeholder="Programınızı giriniz"></input>
                    <Image className={styles.icon} src="/icons/saveblack.svg" width={30} height={30}
                    onClick={()=>{
                        let saat=document.getElementById("saatcumartesi").value
                        let program=document.getElementById("programcumartesi").value
                        let gun ="cumartesi"
                        if(saat=="" || program==""){
                            alert("Lütfen programı ve saatini giriniz")
                        }else{
                            saveprog({gun,saat,program})
                        }

                    }}
                    ></Image>
                </div>
            </div>
        </div>
    )
    async function getprogram(){
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
        const rehRef = doc(db,"rehberlik",user)
        const vss= await getDoc(rehRef)
        setprogram1(vss.data().pazartesi)
        setprogram2(vss.data().sali)
        setprogram3(vss.data().carsamba)
        setprogram4(vss.data().persembe)
        setprogram5(vss.data().cuma)
        setprogram6(vss.data().cumartesi)
        setprogram7(vss.data().pazar)
        setgetprog(true)
    }
    async function saveprog({gun,saat,program}){
        const data = {
            saat,
            program
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
        const rehRef = doc(db,"rehberlik",user)
        if(gun=="pazartesi"){
            await updateDoc(rehRef,{
                pazartesi:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun=="sali"){
            await updateDoc(rehRef,{
                sali:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun=="carsamba"){
            await updateDoc(rehRef,{
                carsamba:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun=="persembe"){
            await updateDoc(rehRef,{
                persembe:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun=="cuma"){
            await updateDoc(rehRef,{
                cuma:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun="cumartesi"){
            await updateDoc(rehRef,{
                cumartesi:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }else if(gun=="pazar"){
            await updateDoc(rehRef,{
                pazar:arrayUnion(data)
            })
            alert("Programınız kaydedildi")
            window.location.href="/rehberlik"
        }
    }async function deleteprog({gun,saat,program}){
        const data = {
            saat,
            program
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
        const rehRef = doc(db,"rehberlik",user)
        if(gun=="pazartesi"){
            await updateDoc(rehRef,{
                pazartesi:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun=="sali"){
            await updateDoc(rehRef,{
                sali:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun=="carsamba"){
            await updateDoc(rehRef,{
                carsamba:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun=="persembe"){
            await updateDoc(rehRef,{
                persembe:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun=="cuma"){
            await updateDoc(rehRef,{
                cuma:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun="cumartesi"){
            await updateDoc(rehRef,{
                cumartesi:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }else if(gun=="pazar"){
            await updateDoc(rehRef,{
                pazar:arrayRemove(data)
            })
            alert("Programınız silindi")
            window.location.href="/rehberlik"
        }
    }
}
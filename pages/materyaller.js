import styles from '../components/styles/materyaller.module.css'
import { useState, useEffect } from 'react'
import cookies from 'js-cookie'

import { initializeApp } from "firebase/app"
import { collection, orderBy, query, getDocs,getFirestore,where,limit,doc,getDoc,addDoc,setDoc } from "firebase/firestore";


export default function Materyaller(){
    const [files,setfiles]=useState(Array)
    const [getfiles,setgetfiles]=useState(false)
    const [f12,setf12]=useState("none")
    const [f11,setf11]=useState("none")
    const [f10,setf10]=useState("none")
    const [f9,setf9]=useState("none")
    const [user,setuser]=useState(cookies.get("username"))
    const [admin,setadmin]=useState(false)
    const [cadmin,setcadmin]=useState(false)

    useEffect(()=>{
        if(!getfiles){
            file()
        }
        if(!cadmin){
            getadmin()
        }
    },[])
    return(
        <div className="content5">
            {admin&&
            <div className={styles.container}>
                <div className={styles.header}>Dosya Ekle</div>
                <div className={styles.files}>
                    <input id="filename" className={styles.input} placeholder='Dosya adı'></input>
                    <select id='sinif' className={styles.select}>
                        <option value="x">Sınıf Seçiniz</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <button className={styles.btn} onClick={ekle}>Ekle</button>
                </div>
            </div>
            }

            <div className={styles.container}>
                <div className={styles.header} onClick={d12}>
                    12. Sınıf
                </div>
                {files.map((f)=>{
                    return(
                        <div className={styles.list} style={{display:f12}}>
                            {f.sinif=="12"&&
                                <div className={styles.file} onClick={()=>{window.location.href=`http://peraakademi.click/materyaller/${f.filename}`}}>
                                    <div className={styles.name}>
                                        {f.filename}
                                    </div>
                                    <div className={styles.auth}>
                                        {f.sharedby}
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            <div className={styles.container}>
                <div className={styles.header} onClick={d11}>
                    11. Sınıf
                </div>
                {files.map((f)=>{
                    return(
                        <div className={styles.list} style={{display:f11}}>
                            {f.sinif=="11"&&
                                <div className={styles.file}>
                                    <div className={styles.name}>
                                        {f.filename}
                                    </div>
                                    <div className={styles.auth}>
                                        {f.sharedby}
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            <div className={styles.container}>
                <div className={styles.header} onClick={d10}>
                    10. Sınıf
                </div>
                {files.map((f)=>{
                    return(
                        <div className={styles.list} style={{display:f10}}>
                            {f.sinif=="10"&&
                                <div className={styles.file}>
                                    <div className={styles.name}>
                                        {f.filename}
                                    </div>
                                    <div className={styles.auth}>
                                        {f.sharedby}
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
            <div className={styles.container}>
                <div className={styles.header} onClick={d9}>
                    9. Sınıf
                </div>
                {files.map((f)=>{
                    return(
                        <div className={styles.list} style={{display:f9}}>
                            {f.sinif=="9"&&
                                <div className={styles.file}>
                                    <div className={styles.name}>
                                        {f.filename}
                                    </div>
                                    <div className={styles.auth}>
                                        {f.sharedby}
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>

    )
    async function file(){
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
        const materialsRef = collection(db,"materials")
        const q = query(materialsRef,orderBy("date","desc"))
        const qss = await getDocs(q)
        const data=qss.docs.map((d)=>{
            return(
                {
                    id:d.id,
                    filename:d.data().filename,
                    sharedby:d.data().sharedby,
                    sinif:d.data().sinif
                }
            )
        })
        console.log(data)
        setfiles(data)
        setgetfiles(true)
    }
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
        let filename=document.getElementById("filename").value
        let sharedby=user
        let sinif=document.getElementById("sinif").value
        if(filename=="" || sinif=="x"){
            alert("Lütfen dosya adını ve sınıfını giriniz")
        }else{
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
            const docRef= await addDoc(collection(db,"materials"),{
                date,
                filename,
                sharedby,
                sinif
            })
            alert("Belge başarıyla eklendi")
            window.location.href="/materyaller"
        }

    }
    function d12(){
        if(f12=="none"){
            setf12("flex")
        }else{
            setf12("none")
        }
    }
    function d11(){
        if(f11=="none"){
            setf11("flex")
        }else{
            setf11("none")
        }
    }
    function d10(){
        if(f10=="none"){
            setf10("flex")
        }else{
            setf10("none")
        }
    }
    function d9(){
        if(f9=="none"){
            setf9("flex")
        }else{
            setf9("none")
        }
    }
}
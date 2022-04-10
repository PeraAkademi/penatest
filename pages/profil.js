import styles from '../components/styles/profil.module.css'
import Image from 'next/image'
import { useEffect,useState } from 'react';
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, where,getDocs,getFirestore,limit,doc, getDoc, updateDoc } from "firebase/firestore";
import cookies from 'js-cookie'

var md5 = require('md5')


export default function Profil(){
    const [user,setuser]=useState(cookies.get("username"))
    const [gprof,setgpropf]=useState(false)
    const [prof,setprof]=useState([])
    const [sifre,setsifre] =useState()
    const [win,setwin]=useState()
    useEffect(()=>{
        if(!gprof){
            profget()
            setsifre(prof.password)
        }
    },[])
    return(
        <>
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
                    <div className={styles.icon2} onClick={()=>{setwin("isim")}}>
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
                    <div className={styles.icon2} onClick={()=>{setwin("email")}}>
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
                    <div className={styles.icon2} onClick={()=>{setwin("okul")}}>
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
                    <div className={styles.icon2} onClick={()=>{setwin("tel")}}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/password.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        ******
                    </div>
                    <div className={styles.icon2} onClick={()=>{setwin("sifre")}}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image className={styles.icon} src="/icons/logoutblack.svg" width={24} height={24}></Image>
                    </div>
                    <div className={styles.lbl}>
                        Çıkış Yap
                    </div>
                    <div className={styles.icon2} onClick={logout}>
                        <Image src="/icons/settings.svg" width={24} height={24}></Image>
                    </div>
                </div>
            </div>
        </div>
        {win=="email"&&
        <EmailSet></EmailSet>
        }
        {win=="okul"&&
        <OkulSet></OkulSet>
        }
        {win=="sifre"&&
        <SifreSet></SifreSet>
        }
        {win=="isim"&&
        <NameSet></NameSet>
        }
        {win=="tel"&&
        <PhoneSet></PhoneSet>
        }
        </>

    )
    function logout(){
        cookies.set("log")
        cookies.set("username")
        cookies.set("password")
        cookies.set("pp")
        window.location.href="/girisyap"
    }
    function NameSet(){
        return(
            <div className='content2'>
                <div className={styles.container}>
                    <div className={styles.cancel} onClick={cancel}>
                        <Image src="/icons/cancel.svg" width={16} height={16}></Image>
                    </div>
                    <h1 className={styles.h1}>İsmini Güncelle</h1>
                    <input id='name' className={styles.input} placeholder="İsminiz" type="text"></input>
                    <input id='sifremn' className={styles.input} placeholder="Şifreniz" type="password"></input>
                    <button className={styles.btn} onClick={nameup}>Güncelle</button>
                </div>
            </div>
        )
        async function nameup(){
            let pass = md5(document.getElementById("sifremn").value)
            let name=document.getElementById("name").value
            const sifre = prof.password
            if(name!=""){
                if(sifre==pass){
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
                    const userRef = doc(db,"users",user)
                    await updateDoc (userRef,{
                        name
                    })
                    
                    window.location.href="/profil"
                }else{
                    alert("Hatalı şifre girdiniz lütfen tekrar deneyiniz")
                }
            }else{
                alert("Lütfen bir e-posta adresi giriniz")
            }


        }
    }
    function EmailSet(){
        return(
            <div className='content2'>
                <div className={styles.container}>
                    <div className={styles.cancel} onClick={cancel}>
                        <Image src="/icons/cancel.svg" width={16} height={16}></Image>
                    </div>
                    <h1 className={styles.h1}>E-Postanı Güncelle</h1>
                    <input id='email' className={styles.input} placeholder="Yeni e-posta adresiniz" type="email"></input>
                    <input id='sifreme' className={styles.input} placeholder="Şifreniz" type="password"></input>
                    <button className={styles.btn} onClick={emailup}>Güncelle</button>
                </div>
            </div>
        )
        async function emailup(){
            let pass = md5(document.getElementById("sifreme").value)
            let email=document.getElementById("email").value
            const sifre = prof.password
            if(email!=""){
                if(sifre==pass){
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
                    const userRef = doc(db,"users",user)
                    await updateDoc (userRef,{
                        email
                    })
                    cookies.set("email",email,{expires:24*90})
                    window.location.href="/profil"
                }else{
                    alert("Hatalı şifre girdiniz lütfen tekrar deneyiniz")
                }
            }else{
                alert("Lütfen bir e-posta adresi giriniz")
            }


        }
    }
    function OkulSet(){
        return(
            <div className='content2'>
                <div className={styles.container}>
                    <div className={styles.cancel} onClick={cancel}>
                        <Image src="/icons/cancel.svg" width={16} height={16}></Image>
                    </div>
                    <h1 className={styles.h1}>Okulunu Güncelle</h1>
                    <input id='okul' className={styles.input} placeholder="Yeni okulunuz"></input>
                    <input id='sifremo' className={styles.input} placeholder="Şifreniz" type="password"></input>
                    <button className={styles.btn} onClick={okulup} >Güncelle</button>
                </div>
            </div>
        )
        async function okulup(){
            let pass = md5(document.getElementById("sifremo").value)
            let school=document.getElementById("okul").value
            const sifre = prof.password
            if(school!=""){
                if(sifre==pass){
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
                    const userRef = doc(db,"users",user)
                    await updateDoc (userRef,{
                        school
                    })
                    window.location.href="/profil"
                }else{
                    alert("Hatalı şifre girdiniz lütfen tekrar deneyiniz")
                }
            }else{
                alert("Lütfen bir okul ismi giriniz giriniz")
            }   
        }
    }
    function PhoneSet(){
        return(
            <div className='content2'>
                <div className={styles.container}>
                    <div className={styles.cancel} onClick={cancel}>
                        <Image src="/icons/cancel.svg" width={16} height={16}></Image>
                    </div>
                    <h1 className={styles.h1}>Telefonunu Güncelle</h1>
                    <input id='phone' className={styles.input} placeholder="Telefon numaranız" type="number"></input>
                    <input id='sifremp' className={styles.input} placeholder="Şifreniz" type="password"></input>
                    <button className={styles.btn} onClick={phoneup}>Güncelle</button>
                </div>
            </div>
        )
        async function phoneup(){
            let pass = md5(document.getElementById("sifremp").value)
            let phone=document.getElementById("phone").value
            const sifre = prof.password
            if(phone!=""){
                if(sifre==pass){
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
                    const userRef = doc(db,"users",user)
                    await updateDoc (userRef,{
                        phone
                    })
                    window.location.href="/profil"
                }else{
                    alert("Hatalı şifre girdiniz lütfen tekrar deneyiniz")
                }
            }else{
                alert("Lütfen bir e-posta adresi giriniz")
            }


        }
    }
    function SifreSet(){
        return(
            <div className='content2'>
                <div className={styles.container}>
                    <div className={styles.cancel} onClick={cancel}>
                        <Image src="/icons/cancel.svg" width={16} height={16}></Image>
                    </div>
                    <h1 className={styles.h1}>Şifreni Güncelle</h1>
                    <input id='sifrems' className={styles.input} placeholder="Eski şifreniz" type="password"></input>
                    <input id='sifremy' className={styles.input} placeholder="Yeni şifreniz" type="password"></input>
                    <button className={styles.btn} onClick={sifreup}>Güncelle</button>
                </div>
            </div>
        )
        async function sifreup() {
            let pass = md5(document.getElementById("sifrems").value)
            let password=md5(document.getElementById("sifremy").value)
            const sifre = prof.password
            if(password!=""){
                if(sifre==pass){
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
                    const userRef = doc(db,"users",user)
                    await updateDoc (userRef,{
                        password
                    })
                    cookies.set("password",password,{expires:24*90})
                    window.location.href="/profil"
                }else{
                    alert("Hatalı şifre girdiniz lütfen tekrar deneyiniz")
                }
            }else{
                alert("Lütfen bir okul ismi giriniz giriniz")
            }   
        }
    }
    function cancel(){
        setwin()
    }
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
        setprof(pss.data())
        setgpropf(true)
    }
}
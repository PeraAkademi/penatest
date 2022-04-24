import styles from '../components/styles/girisyap.module.css'
import {useState,useEffect} from 'react'
import cookies from 'js-cookie';
import { SignIn } from '../utils/signin';
import { LoginCheck } from '../utils/logincheck';
import { initializeApp } from "firebase/app"
import VideoCard from '../components/videocard';
import Image from 'next/image';
import { collection, orderBy, query, getDocs,getFirestore,limit,doc,getDoc,addDoc,setDoc } from "firebase/firestore";

var md5 = require('md5')


export default function GirisYap(){
    const [p,setp]=useState("girisyap");
    const [videos,setvideos]=useState([])
    const [getvideos,setgetvideos]=useState(false)
    
    useEffect(async ()=>{
        if(!getvideos){
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
            const q = query(videosRef,orderBy("date","desc"),limit(10))
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
    },[])
    return(
        <div className="content1">
            {p=="girisyap"&&
                <GirisPage></GirisPage>
            }
            {p=="uyeol"&&
                <UyeOlPage></UyeOlPage>
            }
        </div>
    )
    function GirisPage(){
        const [i,seti]=useState(0)
        return(
            <div className={styles.container}>
                <div className={styles.content2}>
                    <div className={styles.nav}>
                        <div className={styles.navbtn} onClick={geri}>
                            <Image className={styles.icon} src="/icons/arrow.svg" width={32} height={32} style={{transform:'rotateY(180deg)'}}></Image>
                        </div>
                        <div className={styles.click}>
                            <div className={styles.giris}>
                                Giriş yaparak daha fazla videoyu görüntüleyebilirsiniz
                            </div>
                        </div>
                        <div className={styles.navbtn} onClick={ileri}>
                            <Image className={styles.icon} src="/icons/arrow.svg" width={32} height={32}></Image>
                        </div>
                    </div>
                    <div className={styles.video}>
                        {videos.length>0 &&
                            <VideoCard 
                            id={videos[i].id}
                            name={videos[i].name}
                            info={videos[i].info}
                            thumb={videos[i].thumb}
                            date={videos[i].date}
                            link={videos[i].link}></VideoCard>
                        }
                    </div>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.h1}>Giriş Yap</h1>
                    <input id='username' className={styles.input} placeholder="Kullanıcı adı" onChange={check} maxLength={25} type="text"></input>
                    <input id='password' className={styles.input} placeholder="Şifre" type="password"></input>
                    <button className={styles.button} onClick={girisyapclick}>Giriş Yap</button>
                    <div className={styles.footer}>
                        <div className={styles.a} onClick={()=>{setp("uyeol")}}>Üye Ol</div>
                        <div className={styles.a}>Şifremi Unuttum</div>
                    </div>
                </div>
            </div>
        )
        function ileri(){
            let x = videos.length-1
            if(i==x){
                seti(0)
            }else{
                seti(i+1)
            }
        }
        function geri(){
            let x = videos.length-1
            if(i==0){
                seti(x)
            }else{
                seti(i-1)
            }
        }
        function girisyapclick(){
            let username=document.getElementById("username").value
            let password = md5(document.getElementById("password").value)
            LoginCheck(username,password)
        }
        function check(){
            let text = document.getElementById("username").value
            text=text.replace(" ","")
            text=text.replace("/","")
            text=text.replace("[","")
            text=text.replace("@","")
            text=text.replace("#","")
            text=text.replace("$","")
            text=text.replace("%","")
            text=text.replace("^","")
            text=text.replace("&","")
            text=text.replace("*","")
            text=text.replace("(","")
            text=text.replace(")","")
            text=text.replace("+","")
            text=text.replace('=',"")
            text=text.replace("{","")
            text=text.replace("}","")
            text=text.replace(";","")
            text=text.replace(":","")
            text=text.replace(",","")
            text=text.replace("<","")
            text=text.replace(">","")
            text=text.replace("?","")
            text=text.replace("|","")
            document.getElementById("username").value=text
        }
        
    }
    function UyeOlPage(){
        return(
            <div className={styles.content}>
                <h1 className={styles.h1}>Üye Ol</h1>
                <input id='username' className={styles.input} placeholder="Kullanıcı adınız" onChange={check}></input>
                <input id='email' type="email" className={styles.input} placeholder="E-posta adresinız"></input>
                <input id='password' className={styles.input} placeholder="Şifreniz" type="password"></input>
                <input id='rpassword' className={styles.input} placeholder="Şifrenizin tekrarı" type="password"></input>
                <input id='name' className={styles.input} placeholder="Adınız-soyadınız"></input>
                <input id='school' className={styles.input} placeholder="Liseniz" type="text"></input>
                <input id='phone' className={styles.input} placeholder="Telefon numaranız" type="number"></input>
                <input id='code' className={styles.input} placeholder="Ürün kodunuz"></input>
                <button className={styles.button} onClick={uyeolclick}>Üye Ol</button>
                <div className={styles.footer}>
                    <div className={styles.a} onClick={()=>{setp("girisyap")}}>
                        Giriş Yap
                    </div>
                    <div className={styles.a}>
                        Şifremi Unuttum
                    </div>
                </div>
            </div>
        )
        function uyeolclick(){
            let username = (document.getElementById("username").value)
            let password = md5(document.getElementById("password").value)
            let rpassword = md5(document.getElementById("rpassword").value)
            let email = document.getElementById("email").value
            let name = document.getElementById("name").value
            let school= document.getElementById("school").value
            let phone = document.getElementById("phone").value
            let code = document.getElementById("code").value
            if(rpassword==password){
                if(username==""){
                    alert("Lütfen kullanıcı adınızı giriniz")
                }else if(password==""){
                    alert("Lütfen şifrenizi giriniz")
                }else if(email==""){
                    alert("Lütfen email adresinizi giriniz")
                }else if(name==""){
                    alert("Lütfen adınızı-soyadınızı giriniz")
                }else if(school==""){
                    alert("Lütfen lisenizi giriniz")
                }else if(phone==""){
                    alert("Lütfen telefon numaranızı giriniz")
                }else if (code==""){
                    alert("Lütfen ürün kodunuzu giriniz")
                }
                else{
                    SignIn(username,password,email,name,school,phone,code)
                }
            }else{
                alert("Şifreleriniz uyuşmuyor")
            }
        }
        function check(){
            let text = document.getElementById("username").value
            text=text.replace(" ","")
            text=text.replace("/","")
            text=text.replace("[","")
            text=text.replace("@","")
            text=text.replace("#","")
            text=text.replace("$","")
            text=text.replace("%","")
            text=text.replace("^","")
            text=text.replace("&","")
            text=text.replace("*","")
            text=text.replace("(","")
            text=text.replace(")","")
            text=text.replace("+","")
            text=text.replace('=',"")
            text=text.replace("{","")
            text=text.replace("}","")
            text=text.replace(";","")
            text=text.replace(":","")
            text=text.replace(",","")
            text=text.replace("<","")
            text=text.replace(">","")
            text=text.replace("?","")
            text=text.replace("|","")
            document.getElementById("username").value=text
        }
    }

}
import styles from '../components/styles/girisyap.module.css'
import {useState,useEffect} from 'react'
import cookies from 'js-cookie';
import { SignIn } from '../utils/signin';
import { LoginCheck } from '../utils/logincheck';
import { async } from '@firebase/util';

var md5 = require('md5')


export default function GirisYap(){
    const [p,setp]=useState("girisyap");
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
        return(
            <div className={styles.content}>
                <h1 className={styles.h1}>Giriş Yap</h1>
                <input id='username' className={styles.input} placeholder="Kullanıcı adı"></input>
                <input id='password' className={styles.input} placeholder="Şifre" type="password"></input>
                <button className={styles.button} onClick={girisyapclick}>Giriş Yap</button>
                <div className={styles.footer}>
                    <div className={styles.a} onClick={()=>{setp("uyeol")}}>Üye Ol</div>
                    <div className={styles.a}>Şifremi Unuttum</div>
                </div>
            </div>
        )
        function girisyapclick(){
            let username=document.getElementById("username").value
            let password = md5(document.getElementById("password").value)
            LoginCheck(username,password)
        }
    }
    function UyeOlPage(){
        return(
            <div className={styles.content}>
                <h1 className={styles.h1}>Üye Ol</h1>
                <input id='username' className={styles.input} placeholder="Kullanıcı adınız"></input>
                <input id='email' type="email" className={styles.input} placeholder="E-posta adresinız"></input>
                <input id='password' className={styles.input} placeholder="Şifreniz" type="password"></input>
                <input id='rpassword' className={styles.input} placeholder="Şifrenizin tekrarı" type="password"></input>
                <input id='name' className={styles.input} placeholder="Adınız-soyadınız"></input>
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
            if(rpassword==password){
                if(username==""){
                    alert("Lütfen kullanıcı adınızı giriniz")
                }else if(password==""){
                    alert("Lütfen şifrenizi giriniz")
                }else if(email==""){
                    alert("Lütfen email adresinizi giriniz")
                }else if(name==""){
                    alert("Lütfen adınızı-soyadınızı giriniz")
                }else{
                    SignIn(username,password,email,name)
                }
            }else{
                alert("Şifreleriniz uyuşmuyor")
            }

        }
    }
}
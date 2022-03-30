import styles from '../components/styles/girisyap.module.css'
import {useState,useEffect} from 'react'
import cookies from 'js-cookie';
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
                <input className={styles.input} placeholder="Kullanıcı adı"></input>
                <input className={styles.input} placeholder="Şifre" type="password"></input>
                <button className={styles.button} onClick={girisyapclick}>Giriş Yap</button>
                <div className={styles.footer}>
                    <div className={styles.a} onClick={()=>{setp("uyeol")}}>Üye Ol</div>
                    <div className={styles.a}>Şifremi Unuttum</div>
                </div>
            </div>
        )
        function girisyapclick(){
            cookies.set("log","true",{expires:24*90})
            window.location.href="/"
        }
    }
    function UyeOlPage(){
        return(
            <div className={styles.content}>
                <h1 className={styles.h1}>Üye Ol</h1>
                <input className={styles.input} placeholder="Kullanıcı adınız"></input>
                <input className={styles.input} placeholder="E-posta adresinız" type="email"></input>
                <input className={styles.input} placeholder="Şifreniz" type="password"></input>
                <input className={styles.input} placeholder="Şifrenizin tekrarı"></input>
                <input className={styles.input} placeholder="Adınız-soyadınız"></input>
                <button className={styles.button}>Üye Ol</button>
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
    }
}
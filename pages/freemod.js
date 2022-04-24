import styles from '../components/styles/freemod.module.css'
import { useEffect,useState } from 'react'
import cookies from 'js-cookie'
import Image from 'next/image';
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, getDocs,getFirestore,limit,doc,getDoc,addDoc } from "firebase/firestore";

export default function FreeMod(){
    const [player,setplayer]=useState()
    const [playlist,setplaylist]=useState(Array)
    const [getlist,setgetlist]=useState(false)
    const [admin,setadmin]=useState(false)
    const [cadmin,setcadmin]=useState(false)
    const [user,setuser]=useState(cookies.get("username"))
    const [add,setadd]=useState(false)
    const [popular,setpopular]=useState([])
    const [getpopular,setgetpopular]=useState(false)
    const [upcoming,setupcoming]=useState([])
    const [getupcoming,setgetupcoming]=useState(false)
    useEffect(()=>{
        if(!getlist){
            playlistget()
        }
        if(!cadmin){
            getadmin()
        }
        if(!getpopular){
            populars()
        }
        if(!getupcoming){
            upcomings()
        }
    },[])
    return(
        <div className='content5'>
            <div className={styles.container}>
                {admin&&
                <div className={styles.card} onClick={()=>{
                    if(!add){
                        setadd(true)
                    }else{
                        setadd(false)
                    }
                }}>
                    +
                </div>
                }

                {playlist.map((p)=>{
                    return(
                    <div key={p.link} className={styles.card} onClick={()=>{setplayer(p.link)}}>
                        {p.name}
                    </div>
                    )
                })}
            </div>
            {add&&
            <div className={styles.container2} style={{flexDirection:'column'}}>
                <input id='name' className={styles.input} placeholder='Liste adı'></input>
                <input id='link' className={styles.input} placeholder='Spotify linki'></input>
                <button onClick={ekle}>Ekle</button>
            </div>
            }

            {player&&
            <div className={styles.container2}>
                <iframe className={styles.iframe} src={`${player}?utm_source=generator`} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            }
            <div className={styles.container3}>
                <div className={styles.header}>
                        Popüler Filmler
                </div>
            </div>
            <div className={styles.container}>

                {popular.map((p)=>{
                    return(
                    <div key={p.title+"popular"} className={styles.poster}>
                        <div className={styles.title}>
                            {p.title}
                        </div>
                        <img className={styles.img} src={`https://www.themoviedb.org/t/p/original/${p.poster_path}`} ></img>
                        <div className={styles.info}>
                            {p.original_title} <br></br>
                            {p.release_date}
                            <div className={styles.point}>
                                {p.vote_average}
                            </div>
                        </div>
                        <div className={styles.desc}>
                            {p.overview}
                        </div>
                    </div> 
                    )
                })}
            </div>
            <div className={styles.container3}>
                <div className={styles.header}>
                        Gelecek Filmler
                </div>
            </div>
            <div className={styles.container}>
                {upcoming.map((p)=>{
                    return(
                    <div key={p.title+"upcoming"} className={styles.poster}>
                        <div className={styles.title}>
                            {p.title}
                        </div>
                        <img className={styles.img} src={`https://www.themoviedb.org/t/p/original/${p.poster_path}`} ></img>
                        <div className={styles.info}>
                            {p.original_title} <br></br>
                            {p.release_date}
                            <div className={styles.point}>
                                {p.vote_average}
                            </div>
                        </div>
                        <div className={styles.desc}>
                            {p.overview}
                        </div>
                    </div> 
                    )
                })}

            </div>
        </div>
    )
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
        const docRef= await addDoc(collection(db,"playlist"),{
            link,
            name
        })
        alert("Liste başarıyla eklendi")
        window.location.href="/freemod"
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
    async function playlistget(){
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
        const plRef = collection(db,"playlist")
        const q = query(plRef)
        const pss= await getDocs(q)
        const pl = pss.docs.map((doc)=>doc.data())
        setplaylist(pl)
        setgetlist(true)
    }
    async function populars(){
        const req = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=09f9aaeb5c957e29ddcb90c84c436b26&language=tr-TR&page=1&region=TR')
        const res= await req.json()
        setgetpopular(true)
        setpopular(res.results)
    }
    async function upcomings(){
        const req = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=09f9aaeb5c957e29ddcb90c84c436b26&language=tr-TR&page=1&region=TR')
        const res= await req.json()
        console.log(res.results)
        setgetupcoming(true)
        setupcoming(res.results)
    }
}
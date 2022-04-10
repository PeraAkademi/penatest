import styles from '../components/styles/freemod.module.css'
import { useEffect,useState } from 'react'
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, getDocs,getFirestore,limit } from "firebase/firestore";
export default function FreeMod(){
    const [player,setplayer]=useState()
    const [playlist,setplaylist]=useState(Array)
    const [getlist,setgetlist]=useState(false)
    useEffect(()=>{
        if(!getlist){
            playlistget()
        }
    },[])
    return(
        <div className='content5'>
            <div className={styles.container}>
                {playlist.map((p)=>{
                    return(
                    <div key={p.link} className={styles.card} onClick={()=>{setplayer(p.link)}}>
                        {p.name}
                    </div>
                    )
                })}
            </div>
            {player&&
            <div className={styles.container2}>
                <iframe className={styles.iframe} src={player} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            }


            <div className={styles.container}>

                <div>
                    Ea ullamco ex laborum in ipsum tempor. Aute consequat amet aute qui dolor eiusmod dolore. Et laborum qui officia labore excepteur excepteur quis sunt ut non enim sunt tempor.

Ullamco sit id elit amet Lorem laborum id nulla. Eiusmod nisi nostrud culpa aliquip mollit adipisicing sit tempor qui velit occaecat fugiat ad. Fugiat qui qui nulla ea elit et velit nisi sit velit proident commodo non. Consequat enim quis cupidatat deserunt exercitation.

Incididunt culpa in pariatur anim in excepteur sunt voluptate minim eiusmod in sint reprehenderit. Voluptate pariatur culpa duis nulla qui. Labore et id voluptate est occaecat in dolor sit sint deserunt proident.

Sit in laboris excepteur ad elit proident ad. Culpa veniam anim ut enim sit mollit officia mollit. Ullamco irure nostrud commodo esse irure ad enim consectetur ex. Laborum dolore ad nostrud aute dolore labore et exercitation. Non velit voluptate nisi elit incididunt amet nostrud commodo. Do eiusmod proident nisi veniam voluptate labore proident sit ut reprehenderit.

Deserunt velit incididunt magna duis anim quis dolor sint tempor cillum. Elit anim qui voluptate ea eiusmod aliquip amet. Reprehenderit deserunt veniam ipsum sint eiusmod pariatur aliqua consequat irure ex. Do consequat ea aute reprehenderit incididunt. Consequat dolor ad proident quis eu amet pariatur aute qui qui duis enim. Cillum anim magna tempor eiusmod aliqua reprehenderit do deserunt do cillum. Pariatur pariatur culpa nulla est officia.

Tempor reprehenderit reprehenderit sint pariatur aliquip ex laboris exercitation eu. Sunt ad elit id nulla consequat commodo non. Non laborum in ullamco dolore.

Lorem amet nostrud occaecat proident velit sunt culpa anim aute fugiat. Ad cupidatat velit aliquip excepteur quis id officia. Incididunt elit commodo minim do sint ipsum anim consectetur aute esse eiusmod laboris ipsum aute. Officia eiusmod adipisicing velit ullamco nostrud in ad labore. Amet cillum enim pariatur laboris commodo nostrud ex dolore. Dolore nulla ipsum aute aliqua cupidatat Lorem veniam minim ullamco esse.

Laboris do ut id consequat fugiat fugiat deserunt cillum anim ad Lorem adipisicing veniam. Adipisicing cillum aliquip laboris excepteur ex laboris enim ipsum. Duis consectetur quis adipisicing non.

Esse consectetur Lorem aliqua nisi proident minim. Aliqua nulla voluptate culpa minim consequat fugiat dolore officia exercitation. Minim reprehenderit magna pariatur reprehenderit adipisicing ut quis exercitation cillum commodo esse mollit velit. In mollit eiusmod ea nostrud. Eu commodo in aute adipisicing nostrud ex do do id nulla excepteur ad mollit duis. Cupidatat eu est dolore laborum. In officia in est nostrud ad sit ex pariatur ea.

Commodo velit aute veniam Lorem quis anim qui occaecat. Incididunt dolore enim cillum duis nisi officia est dolore ipsum ullamco nulla nulla consectetur. Ullamco esse veniam labore in. Tempor proident ea ipsum adipisicing exercitation. Nulla deserunt et proident ullamco occaecat reprehenderit ea.
                </div>
                <div>
                    Ea ullamco ex laborum in ipsum tempor. Aute consequat amet aute qui dolor eiusmod dolore. Et laborum qui officia labore excepteur excepteur quis sunt ut non enim sunt tempor.

Ullamco sit id elit amet Lorem laborum id nulla. Eiusmod nisi nostrud culpa aliquip mollit adipisicing sit tempor qui velit occaecat fugiat ad. Fugiat qui qui nulla ea elit et velit nisi sit velit proident commodo non. Consequat enim quis cupidatat deserunt exercitation.

Incididunt culpa in pariatur anim in excepteur sunt voluptate minim eiusmod in sint reprehenderit. Voluptate pariatur culpa duis nulla qui. Labore et id voluptate est occaecat in dolor sit sint deserunt proident.

Sit in laboris excepteur ad elit proident ad. Culpa veniam anim ut enim sit mollit officia mollit. Ullamco irure nostrud commodo esse irure ad enim consectetur ex. Laborum dolore ad nostrud aute dolore labore et exercitation. Non velit voluptate nisi elit incididunt amet nostrud commodo. Do eiusmod proident nisi veniam voluptate labore proident sit ut reprehenderit.

Deserunt velit incididunt magna duis anim quis dolor sint tempor cillum. Elit anim qui voluptate ea eiusmod aliquip amet. Reprehenderit deserunt veniam ipsum sint eiusmod pariatur aliqua consequat irure ex. Do consequat ea aute reprehenderit incididunt. Consequat dolor ad proident quis eu amet pariatur aute qui qui duis enim. Cillum anim magna tempor eiusmod aliqua reprehenderit do deserunt do cillum. Pariatur pariatur culpa nulla est officia.

Tempor reprehenderit reprehenderit sint pariatur aliquip ex laboris exercitation eu. Sunt ad elit id nulla consequat commodo non. Non laborum in ullamco dolore.

Lorem amet nostrud occaecat proident velit sunt culpa anim aute fugiat. Ad cupidatat velit aliquip excepteur quis id officia. Incididunt elit commodo minim do sint ipsum anim consectetur aute esse eiusmod laboris ipsum aute. Officia eiusmod adipisicing velit ullamco nostrud in ad labore. Amet cillum enim pariatur laboris commodo nostrud ex dolore. Dolore nulla ipsum aute aliqua cupidatat Lorem veniam minim ullamco esse.

Laboris do ut id consequat fugiat fugiat deserunt cillum anim ad Lorem adipisicing veniam. Adipisicing cillum aliquip laboris excepteur ex laboris enim ipsum. Duis consectetur quis adipisicing non.

Esse consectetur Lorem aliqua nisi proident minim. Aliqua nulla voluptate culpa minim consequat fugiat dolore officia exercitation. Minim reprehenderit magna pariatur reprehenderit adipisicing ut quis exercitation cillum commodo esse mollit velit. In mollit eiusmod ea nostrud. Eu commodo in aute adipisicing nostrud ex do do id nulla excepteur ad mollit duis. Cupidatat eu est dolore laborum. In officia in est nostrud ad sit ex pariatur ea.

Commodo velit aute veniam Lorem quis anim qui occaecat. Incididunt dolore enim cillum duis nisi officia est dolore ipsum ullamco nulla nulla consectetur. Ullamco esse veniam labore in. Tempor proident ea ipsum adipisicing exercitation. Nulla deserunt et proident ullamco occaecat reprehenderit ea.
                </div>
                <div>
                    Ea ullamco ex laborum in ipsum tempor. Aute consequat amet aute qui dolor eiusmod dolore. Et laborum qui officia labore excepteur excepteur quis sunt ut non enim sunt tempor.

Ullamco sit id elit amet Lorem laborum id nulla. Eiusmod nisi nostrud culpa aliquip mollit adipisicing sit tempor qui velit occaecat fugiat ad. Fugiat qui qui nulla ea elit et velit nisi sit velit proident commodo non. Consequat enim quis cupidatat deserunt exercitation.

Incididunt culpa in pariatur anim in excepteur sunt voluptate minim eiusmod in sint reprehenderit. Voluptate pariatur culpa duis nulla qui. Labore et id voluptate est occaecat in dolor sit sint deserunt proident.

Sit in laboris excepteur ad elit proident ad. Culpa veniam anim ut enim sit mollit officia mollit. Ullamco irure nostrud commodo esse irure ad enim consectetur ex. Laborum dolore ad nostrud aute dolore labore et exercitation. Non velit voluptate nisi elit incididunt amet nostrud commodo. Do eiusmod proident nisi veniam voluptate labore proident sit ut reprehenderit.

Deserunt velit incididunt magna duis anim quis dolor sint tempor cillum. Elit anim qui voluptate ea eiusmod aliquip amet. Reprehenderit deserunt veniam ipsum sint eiusmod pariatur aliqua consequat irure ex. Do consequat ea aute reprehenderit incididunt. Consequat dolor ad proident quis eu amet pariatur aute qui qui duis enim. Cillum anim magna tempor eiusmod aliqua reprehenderit do deserunt do cillum. Pariatur pariatur culpa nulla est officia.

Tempor reprehenderit reprehenderit sint pariatur aliquip ex laboris exercitation eu. Sunt ad elit id nulla consequat commodo non. Non laborum in ullamco dolore.

Lorem amet nostrud occaecat proident velit sunt culpa anim aute fugiat. Ad cupidatat velit aliquip excepteur quis id officia. Incididunt elit commodo minim do sint ipsum anim consectetur aute esse eiusmod laboris ipsum aute. Officia eiusmod adipisicing velit ullamco nostrud in ad labore. Amet cillum enim pariatur laboris commodo nostrud ex dolore. Dolore nulla ipsum aute aliqua cupidatat Lorem veniam minim ullamco esse.

Laboris do ut id consequat fugiat fugiat deserunt cillum anim ad Lorem adipisicing veniam. Adipisicing cillum aliquip laboris excepteur ex laboris enim ipsum. Duis consectetur quis adipisicing non.

Esse consectetur Lorem aliqua nisi proident minim. Aliqua nulla voluptate culpa minim consequat fugiat dolore officia exercitation. Minim reprehenderit magna pariatur reprehenderit adipisicing ut quis exercitation cillum commodo esse mollit velit. In mollit eiusmod ea nostrud. Eu commodo in aute adipisicing nostrud ex do do id nulla excepteur ad mollit duis. Cupidatat eu est dolore laborum. In officia in est nostrud ad sit ex pariatur ea.

Commodo velit aute veniam Lorem quis anim qui occaecat. Incididunt dolore enim cillum duis nisi officia est dolore ipsum ullamco nulla nulla consectetur. Ullamco esse veniam labore in. Tempor proident ea ipsum adipisicing exercitation. Nulla deserunt et proident ullamco occaecat reprehenderit ea.
                </div>
            </div>
        </div>
    )
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

}
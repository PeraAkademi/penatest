import styles from '../../components/styles/video.module.css'
import VideoCard from '../../components/videocard'
import { initializeApp } from "firebase/app";
import { collection, orderBy, query, getDocs,getFirestore,limit } from "firebase/firestore";

export default function Videolar({videos}){
    return(
        <div className="content3">
            <div className={styles.list}>
                {videos.map((v)=>{
                    return(
                        <VideoCard 
                        key={v.id}
                        id={v.id}
                        name={v.name}
                        info={v.info}
                        thumb={v.thumb}
                        date={v.date}></VideoCard>
                    )
                })}
                
            </div>
        </div>
    )
}
export async function getStaticProps() {
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
    const q = query(videosRef,orderBy("date","asc"),limit(50))
    const qss = await getDocs(q)
    const data = qss.docs.map((d)=>{
        return(
            {
                id:d.id,
                name:d.data().name,
                info:d.data().info,
                thumb:d.data().thumb,
                date:d.data().date
            }
        )
    })
    return{
        props:{videos:data}
    }
}
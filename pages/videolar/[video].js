import styles from '../../components/styles/video.module.css';
import Image from 'next/image';
export default function Video(){
    return(
        <div className="content2">
            <div className={styles.video}>
            <iframe className={styles.iframe} src="https://www.youtube.com/embed/J0y6wM0aAgE"></iframe>
            <div className={styles.tools}>
                <div className={styles.toolbtn}>
                    <Image src="/icons/notekle.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Not Ekle</h1>
                </div>
                <div className={styles.toolbtn}>
                    <Image src="/icons/paylas.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Paylaş</h1>
                </div>
                <div className={styles.toolbtn}>
                    <Image src="/icons/oner.svg" width={30} height={30}></Image>
                    <h1 className={styles.h1}>Öner</h1>
                </div>
            </div>
            <div className={styles.notes}>
                <h2 className={styles.h2}>Consequat quis mollit excepteur ad. Aliqua laborum esse dolor excepteur dolor laborum esse incididunt aute consequat ullamco. Laboris velit duis non nulla dolor eiusmod esse deserunt aliqua officia. Velit aliquip laborum eiusmod fugiat pariatur excepteur sunt qui tempor minim non tempor officia voluptate.</h2>
            </div>
            </div>
        </div>
    )
}
export async function getStaticPaths (){
    return{
        paths:[
            {params:{video:"404"}}
        ],
        fallback:true
    }
}
export async function getStaticProps(context){
    const {params} =context
    const v = params.video
    return{
        props:{v}
    }
}
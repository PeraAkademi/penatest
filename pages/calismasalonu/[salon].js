import styles from '../../components/styles/cs.module.css';
import Image from 'next/image';
import MSG from '../../components/msg';

export default function Salon(){
    return(
        <div className="content4">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.sec}>
                        <Image className={styles.icon} width={32} height={32} src="/icons/mic.svg"></Image>
                        <div className={styles.plate}>
                            Ses Odası 1
                        </div>
                    </div>
                    <div className={styles.sec}>
                        <Image className={styles.icon} width={32} height={32} src="/icons/mic.svg"></Image>
                        <div className={styles.plate}>
                            Ses Odası 2
                        </div>
                    </div>
                    <div className={styles.sec}>
                        <Image className={styles.icon} width={32} height={32} src="/icons/mic.svg"></Image>
                        <div className={styles.plate}>
                            Ses Odası 2
                        </div>
                    </div>
                    <div className={styles.sec2}>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/profil.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/mic.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/videocam.svg"></Image>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.sohbet}>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                        <MSG></MSG>
                    </div>
                    <div className={styles.chat}>
                        <input className={styles.input}></input>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/gonder.svg"></Image>
                        <Image className={styles.icon2} width={32} height={32} src="/icons/attachfile.svg"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
export async function getStaticPaths (){
    return{
        paths:[
            {params:{salon:""}}
        ],
        fallback:true
    }
}
export async function getStaticProps(context){
    const {params} =context
    const v = params.salon
    return{
        props:{v}
    }
}
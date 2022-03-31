import { initializeApp } from "firebase/app";
import { doc,getDoc,getDocs,collection,query,where,setDoc,getFirestore } from "firebase/firestore"; 

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

async function SignIn(username,password,email,name){
    const docRef = doc(db,"users",username.toString())
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
        alert("Bu isimde bir kullanıcı zaten var")
    }else{
        const userRef = collection(db,"users")
        const q = query(userRef,where("email","==",email.toString()))
        const qss = await getDocs(q)
        if(qss.docs.map((doc)=>doc.data()).length>0){
            alert("Bu email adresine kayıtlı bir hesap zaten var")
        }else{
            const date=Date.now()/1000
            await setDoc(doc(db, "users", username.toString()), {
                username,
                email,
                password,
                name,
                createTime:date
            });
            alert("Kullanıcı başarıyla oluşturuldu")
            window.location.href="/girisyap"
        }

    }


}
export {SignIn}
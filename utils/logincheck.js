import { initializeApp } from "firebase/app";
import { doc,getDoc,getFirestore } from "firebase/firestore"; 
import cookies from 'js-cookie'
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

async function LoginCheck(username,password){
    const docRef=doc(db,"users",username.toString())
    const docSnap = await getDoc(docRef)
    if(password==docSnap.data().password){
        cookies.set("login","true",{expires:24*90})
        cookies.set("username",docSnap.data().username,{expires:24*90})
        cookies.set("password",docSnap.data().password,{expires:24*90})
        cookies.set("pp","pp.svg",{expires:24*90})
        cookies.set("t",docSnap.data().teacher,{expires:24*90})
        window.location.href="/"
    }else{
        alert("Kullanıcı bilgileriniz uyuşmamaktadır")
    }
}
export {LoginCheck}
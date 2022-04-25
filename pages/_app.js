import '../styles/globals.css'
import Menu from '../components/menu'
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'
import Head from 'next/head'
import cookies from 'js-cookie'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [login,setlogin]=useState(cookies.get("login")||"false")
  useEffect(()=>{
    if(login=="false" && asPath!="/girisyap"){
      window.location.href="/girisyap"
    }else if(login=="true" && asPath=="/girisyap"){
      window.location.href="/"
    }
  },[])
  return (
    <>
    <Head>
      <title>Pera Akademi</title>
      <link rel='icon' href='pp.jpg'></link>
    </Head>
    <Menu href={asPath}></Menu>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  )

}

export default MyApp

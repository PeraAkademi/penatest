import '../styles/globals.css'
import Menu from '../components/menu'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  return (
    <>
    <Menu href={asPath}></Menu>
    <Component {...pageProps} />
    </>
  )

}

export default MyApp

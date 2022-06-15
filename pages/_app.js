import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Head from "next/head";
import '.././styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="سایت نکست بلاگ" />
        <meta name="description" content="به مرجع مقالات و مقاله نویسان خوش آمدید" />
        <title>نکست بلاگ</title>
      </Head>
    
    
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

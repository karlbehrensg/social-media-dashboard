import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>

      <div className='container'>
        <Header />
        <main>
          <h1>Home</h1>
        </main>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
        }
        
        main {
          height: 100%;
          width: 100%;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  )
}

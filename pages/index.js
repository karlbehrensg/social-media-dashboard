import Head from 'next/head'
import Header from "../components/Header";
import GeneralCard from "../components/GeneralCard";
import {useState, useEffect} from "react";

export default function Home() {
  const [stats, setStats] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/facebook')
      .then(res => res.json())
      .then(setStats)
  }, [])

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>

      <div>
        <Header />
        <div className='container'>
          <div className="general-stats">
            <GeneralCard
              userName={stats.userName}
              followers={stats.followers}
              today={stats.today}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: inherit;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 25px;
          justify-content: inherit;
        }
        
        .general-stats {
          display: grid;
          column-gap: 30px;
          row-gap: 10px;
          padding: 21px 0;
          grid-template-columns: repeat(4, 1fr);
        }
      `}</style>
    </>
  )
}

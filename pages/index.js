import Head from 'next/head'
import Header from "../components/Header";
import GeneralCard from "../components/GeneralCard";
import {useState, useEffect} from "react";

export default function Home() {
  const [facebook, setFacebook] = useState([])
  const [twitter, setTwitter] = useState([])
  const [instagram, setInstagram] = useState([])
  const [youtube, setYoutube] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/api/facebook')
      .then(res => res.json())
      .then(setFacebook)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/twitter')
      .then(res => res.json())
      .then(setTwitter)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/instagram')
      .then(res => res.json())
      .then(setInstagram)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/api/youtube')
      .then(res => res.json())
      .then(setYoutube)
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
              userName={facebook.username}
              followers={facebook.followers}
              today={facebook.today}
            />
            <GeneralCard
              userName={twitter.username}
              followers={twitter.followers}
              today={twitter.today}
            />
            <GeneralCard
              userName={instagram.username}
              followers={instagram.followers}
              today={instagram.today}
            />
            <GeneralCard
              userName={youtube.username}
              followers={youtube.followers}
              today={youtube.today}
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

import Head from 'next/head'
import {useState, useEffect} from "react";
import GeneralStats from "../components/GeneralStats";
import HeaderStats from "../components/HeaderStats";

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

  const totalFollowers = facebook.followers + instagram.followers + twitter.followers + youtube.followers

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>

      <div>
        <HeaderStats total={totalFollowers} />
        <div className='container'>
          <GeneralStats
            facebook={facebook}
            instagram={instagram}
            twitter={twitter}
            youtube={youtube}
          />
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
      `}</style>
    </>
  )
}

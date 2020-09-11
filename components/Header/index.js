export default function Header () {
  return (
    <>
      <header>
        <div className="container">
          <div className="title-container">
            <h1 className="title">Social Media Dashboard</h1>
            <strong className="followers">Total Followers: 100</strong>
          </div>
        </div>
      </header>

      <style jsx>{`
        header {
          display: flex;
          padding-bottom: 130px;
          justify-content: space-between;
        }
        
        .container {
          display: inherit;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 25px;
          justify-content: inherit;
        }
        
        .title-container {
          padding: 35px 0 25px 0;
        }
        
        .title {
          font-size: 1.95em;
          margin-bottom: 5px;
          color: #fff;
        }
        
        .followers {
          color: #8b97c5;
          font-size: 14px;
        }
        
      `}</style>
    </>
  )
}
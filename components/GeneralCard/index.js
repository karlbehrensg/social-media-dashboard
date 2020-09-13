import IconFacebook from "../Icons/IconFacebook";
import IconUp from "../Icons/IconUp";

export default function GeneralCard ({ userName, followers, today }) {
  return (
    <>
      <div className="general-card">
        <div className="general-card__header">
          <IconFacebook/>
          <span className="sn-user">{userName}</span>
        </div>
        <div className="general-card__main">
          <strong className="sn-feedback">{followers}</strong>
          <span className="sn-feedback-title">FOLLOWERS</span>
        </div>
        <div className="general-card__footer">
          <IconUp />
          <span className="sn-trend-count sn-trend-count--up">{today}</span>
        </div>
      </div>

      <style jsx>{`
        .general-card {
          width: 100%;
          max-width: 325px;
          padding: 32px 20px 25px 20px;
          margin: 0 auto 24px auto;
          position: relative;
          text-align: center;
          border-radius: 5px;
          overflow: hidden;
          user-select: none;
          transition: background-color 0.3s;
          background-color: #252b40;
        }
        
        .general-card__header {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .sn-user {
          margin-left: 7.5px;
          font-weight: 700;
          font-size: 0.85em;
          transition: color 0.3s;
          color: #8b97c6;
        }
        
        .general-card__main {
          display: flex;
          padding: 20px 0;
          flex-direction: column;
        }
        
        .sn-feedback {
          font-size: 3.75em;
          transition: color 0.3s;
          color: #fff;
        }
        
        .sn-feedback-title {
          letter-spacing: 0.35em;
          font-size: 0.9em;
          transition: color 0.3s;
          color: #8b97c6;
        }
        
        .general-card__footer {
          display: flex;
          padding-top: 5px;
          justify-content: center;
          align-items: center;
        }
        
        .sn-trend-count--up {
          color: #1db489;
        }
        
        .sn-trend-count {
          margin-left: 5px;
          font-size: 0.85em;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}
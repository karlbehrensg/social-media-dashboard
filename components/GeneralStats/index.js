import GeneralCard from "../GeneralCard";
import IconFacebook from "../Icons/IconFacebook";
import IconTwitter from "../Icons/IconTwitter";
import IconInstagram from "../Icons/IconInstagram";
import IconYoutube from "../Icons/IconYoutube";

export default function GeneralStats({facebook, instagram, twitter, youtube}) {

  const totalFollowers = facebook.followers + instagram.followers + twitter.followers + youtube.followers

  return (
    <>
      <div className="general-stats">
        <GeneralCard
          socialMedia=<IconFacebook />
        userName={facebook.username}
        followers={facebook.followers}
        today={facebook.today}
        />
        <GeneralCard
          socialMedia=<IconTwitter />
        userName={twitter.username}
        followers={twitter.followers}
        today={twitter.today}
        />
        <GeneralCard
          socialMedia=<IconInstagram />
        userName={instagram.username}
        followers={instagram.followers}
        today={instagram.today}
        />
        <GeneralCard
          socialMedia=<IconYoutube />
        userName={youtube.username}
        followers={youtube.followers}
        today={youtube.today}
        />
      </div>

      <style jsx>{`
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

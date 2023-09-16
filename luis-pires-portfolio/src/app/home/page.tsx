import PersonalPhoto from "@images/personalPhoto.jpg";
import Image from "next/image";
import WorkHistoryList from "./work/workHistoryList";
export default function Home() {
  return (
    <div className="home">
      <div className="home-about">
        <div className="home-about--info">
          <div className="home-about--info--text-body">
            <h1>
              <b>Hi</b>,
            </h1>
            <h1>
              I&apos;m <b>Luis</b>
            </h1>
            <h1>
              <b>fullstack</b> developer.
            </h1>
          </div>
          <a href="/Luis_Pires_Resume.docx.pdf" download>
            <button className="glow-on-hover">
              <h3 className="text-color--secondary">Download CV</h3>
            </button>
          </a>
        </div>
        <Image
          className="home-about--icon"
          src={PersonalPhoto}
          alt={"my photo"}
        />
      </div>
      <div className="home-workHistoryList">
        {" "}
        <WorkHistoryList />
      </div>
    </div>
  );
}

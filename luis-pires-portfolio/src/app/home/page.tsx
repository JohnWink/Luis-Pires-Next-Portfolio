import PersonalPhoto from "@images/personalPhoto.jpg";
import Image from "next/image";
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
              I&apos;m <b>Luis</b>,
            </h1>
            <h1>
              <b>FullStack</b> Developer.
            </h1>
          </div>
          <a href="/Luis_Pires_Resume.docx.pdf" download>
            <button className="glow-on-hover">
              <h3 className="secondary">Download CV</h3>
            </button>
          </a>
        </div>
        <Image className="home-about--icon" src={PersonalPhoto} />
      </div>
    </div>
  );
}

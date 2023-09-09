import PersonalPhoto from "@images/personalPhoto.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="home">
      <div className="home-about">
        <div className="home-about--info">
          <p>
            sfffffffffffffffffffff sdfsssssssssssssssssss sdasdasda
            asdadasdadadassssssssssssssssss adadasdasdasdfd fsfs fs s s
          </p>
          <button className="glow-on-hover">
            <h3 className="secondary">Contact Me</h3>
          </button>
        </div>

        <Image className="home-about--icon" src={PersonalPhoto} />
      </div>
    </div>
  );
}

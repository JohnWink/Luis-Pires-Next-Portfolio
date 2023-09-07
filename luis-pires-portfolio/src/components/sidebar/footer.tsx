import "./footer.scss";
import LinkedinIcon from "@images/linkedinIcon.svg";
import EmailIcon from "@images/emailIcon.svg";
import Image from "next/image";
export default function SidebarFooter() {
  return (
    <div className="sideBarFooter">
      <a
        className="image"
        href="mailto:luisbpires@hotmail.com"
      >
        <Image
          width={35}
          height={35}
          className="image"
          src={EmailIcon}
          alt="EmailIcon"
        />
      </a>
      <a
        className="image"
        target="_blank"
        href="https://www.linkedin.com/in/luis-pires-587964208/"
      >
        <Image width={24} height={24} src={LinkedinIcon} alt="LinkedinIcon" />
      </a>
    </div>
  );
}

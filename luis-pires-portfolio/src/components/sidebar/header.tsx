import Logo from "@images/icons/LPIcon.svg";
import Image from "next/image";
export default function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <Image className="sidebar-header--logo" src={Logo} alt="Logo" />
    </div>
  );
}

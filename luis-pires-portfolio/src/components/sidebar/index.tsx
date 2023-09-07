'use client'
import "./index.scss";
import SidebarFooter from "./footer";
import Logo from "@images/LPIcon.svg";
import Image from "next/image";
import { useRouter, usePathname  } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const[activePage, setActivePage] = useState<string>(pathname)
    useEffect(()=> {
        setActivePage(pathname)
        console.log("activePage: ", activePage)
    }, [pathname])

  return (
    <div className="sidebar">
      <Image className="logo" src={Logo} alt="Logo" />
      <div className="body">
      <button type="button" className={activePage === '/about'? 'active': ''} onClick={() => router.push('/about')}>
          <h2 className="heading-secondary">About</h2>
        </button>
        <button type="button"  className={activePage === '/my-skills'? 'active': ''} onClick={() => router.push('/my-skills')}>
          <h2 className="heading-secondary">My Skills</h2>
        </button>
        <button type="button"  className={activePage === '/work'? 'active': ''} onClick={() => router.push('/work')}>
          <h2 className="heading-secondary">My work</h2>
        </button>
        <button type="button"  className={activePage === '/contact'? 'active': ''}  onClick={() => router.push('/contact')}>
          <h2 className="heading-secondary">Contact</h2>
        </button>
      </div>
      <SidebarFooter/>
    </div>
  );
}

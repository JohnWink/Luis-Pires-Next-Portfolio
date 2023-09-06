import  "./index.scss";
import  Logo from "@images/LPIcon.svg"
import Image from 'next/image'
export default function Sidebar(){
    return(
        <div className="sidebar">
            <Image
            className="logo"
            src={Logo}
            alt="Logo"/>
            <h1 className="heading-secondary">About</h1>
            <h1 className="heading-secondary">My Skills</h1>
            <h1 className="heading-secondary">My work</h1>
            <h1 className="heading-secondary">Contact</h1>
        </div>
    )
}
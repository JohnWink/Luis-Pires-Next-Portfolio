"use client"; 
import { useRouter, usePathname } from "next/navigation";
export default function Contact(){
    const router = useRouter();
    return(
        <div>
            <button onClick={() => router.push("/spaceTraders/main")}>test</button>
        </div>
    )
}
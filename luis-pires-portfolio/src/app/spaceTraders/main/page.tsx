'use client';
import SpaceTraderButton from "@components/buttons/spaceTraderButton"
export default function Main(){
    
    return (
        <div>
           <SpaceTraderButton handleCallback={() => console.log("I was clicked")} text={"this is a test"}/>
        </div>
    )
}
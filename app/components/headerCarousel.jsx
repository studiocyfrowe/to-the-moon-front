'use client'
import { Carousel } from "react-responsive-carousel";
import pulp_fiction from '../assets/pulp-fiction.jpg'
import interstellar from '../assets/interstellar.jpg'
import joker from '../assets/joker.jpeg'
import Image from "next/image";

export default function HeaderCarousel() {
    return (
        <div className="border border-solid border-orange-600 bg-orange-600/30 rounded-lg h-screen overflow-hidden"> 
            <Image src={interstellar} alt="Interstellar" height={`100vh`} className="opacity-40"/>
        </div> 
    )
}
import BgGradient from "./bgGradient";
import bgTexture from '../assets/texture.jpg'
import Image from 'next/image'
import Breadcrumb from "./breadcrumb";

export default function MainLayout({children}) {
    return (
        <main className="flex flex-col h-screen bg-zinc-950 relative overflow-hidden">
            <div className="flex flex-col absolute top-0 mx-auto my-auto z-10 w-screen">
                {children}
            </div>
            <div className="opacity-60"><BgGradient/></div>
        </main>
    )
}
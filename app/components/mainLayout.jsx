import BgGradient from "./bgGradient";
import bgTexture from '../assets/texture.jpg'
import Image from 'next/image'

export default function MainLayout({children}) {
    return (
        <main className="flex flex-col h-screen bg-zinc-950 relative overflow-hidden">
            <div className="flex flex-col absolute top-0 mx-auto my-auto z-10 w-screen h-full">{children}</div>
            {/* <Image src={bgTexture.src} fill className="absolute top-0"/> */}
            <div className="opacity-60"><BgGradient/></div>
            <div className="w-full text-center mt-auto fixed bottom-0 pb-6 z-10">
                <small>2024 | to the moon | by studio_cyfrowe</small>
            </div>
        </main>
    )
}
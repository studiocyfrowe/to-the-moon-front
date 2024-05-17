import Image from "next/image";
import ButtonLay from "./buttonLay";
import readmore_horizontal from '@/app/assets/readmore_horizontal.svg'

export default function NavHeader({label}) {
    return (
        <div className="flex flex-row pt-2 pb-4 border-b border-solid border-zinc-400 p-4">
            <h6 className="text-md my-auto me-auto text-zinc-400">{label}</h6>
            <Image src={readmore_horizontal} width={20} alt='readmore_horizontal'/>
        </div>
    )
}
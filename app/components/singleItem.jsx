import Image from "next/image";
import poster from '../assets/poster.jpg'
import GlobalButton from './globalButton'

export default function SingleItem({data}) {
    return (
        <div className="flex mx-8">
            <div className="flex flex-col mx-auto">
                {data.poster ? <Image src={poster} height={400} alt='poster' className='mb-4 border border-solid border-orange-600 rounded-lg'/> : null}
                <h4 className="text-3xl">{data.name}</h4>
                {data.original ? <div className='px-0 text-zinc-100/80'><small>{data.original}</small></div> : null}
                {data.description ? <div class="flex flex-col my-4">
                    <div className='px-0'><small>{data.description}</small></div>
                </div> : null}
                <GlobalButton label={`read more`}></GlobalButton>
            </div>
        </div>
    )
}
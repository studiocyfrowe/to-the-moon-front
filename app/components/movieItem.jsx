import Image from "next/image";
import poster from '../assets/poster.jpg'
import GlobalButton from '../components/globalButton'

export default function MovieItem({data}) {
    return (
        <div className="flex mb-8">
            <div className="flex flex-col mx-auto">
                <Image src={poster} height={400} alt='poster' className='mb-4 border border-solid border-orange-600 rounded-lg'/>
                <h4 className="text-3xl">Absolwent</h4>
                <div className='px-2'><small>tytuł oryg.: The Graduate</small></div>
                <div class="flex flex-col my-4">
                    <div className='px-2'><small>dramat obyczajowy</small></div>
                    <div className='px-2'><small>1967</small></div>
                </div>
                <GlobalButton label={`read more`}></GlobalButton>
            </div>
        </div>
    )
}
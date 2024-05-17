import Image from "next/image";
import post_photo from '@/app/assets/post.jpg'

export default function PostItem() {
    return (
        <div className="flex flex-col p-4 rounded-md bg-white mx-auto w-3/5">
            <p className='text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar nunc vitae purus suscipit scelerisque. Fusce tincidunt posuere mattis. Morbi gravida eget enim in fringilla.</p>
            <Image src={post_photo} alt='post photo' height={250} className='rounded-md my-4'/>
        </div>
    )
}
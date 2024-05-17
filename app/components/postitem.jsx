import Image from "next/image";
import post_photo from '@/app/assets/post.jpg'
import like from '@/app/assets/like.svg'
import ButtonLay from "./buttonLay";

export default function PostItem() {
    return (
        <div className="flex flex-col p-4 rounded-md bg-white mx-auto w-2/5">
            <div className="me-auto mb-4">
                <ButtonLay>
                    {/* <Image src={user_icon} height={40} alt='Logo' className='me-3'/> */}
                    <div className="flex flex-col me-auto text-start">
                        <h4 className="text-md">Dominik Hofman</h4>
                        <small>2 minuty temu</small>
                    </div>
                </ButtonLay>
            </div>
            <p className='text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar nunc vitae purus suscipit scelerisque. Fusce tincidunt posuere mattis. Morbi gravida eget enim in fringilla.</p>
            <Image src={post_photo} alt='post photo' width={`100%`} className='rounded-md my-4'/>
            <div className="flex flex-row">
                <ButtonLay>
                    <div className="flex flex-col text-start">
                        <small>Dotyczy filmu:</small>
                        <h6 className="text-md">Absolwent - 1968</h6>
                    </div>
                </ButtonLay>
                <div className="flex flex-row ms-auto">
                    <ButtonLay>
                        <div className="flex flex-row text-start">
                            <Image src={like} alt='like' height={20} className='me-1'/>
                            <h6 className="text-md">123</h6>
                        </div>
                    </ButtonLay>
                    <div className="mx-2"></div>
                    <ButtonLay>
                        <div className="flex flex-row text-start">
                            <Image src={like} alt='like' height={20} className='me-1'/>
                            <h6 className="text-md">123</h6>
                        </div>
                    </ButtonLay>
                </div>
            </div>
        </div>
    )
}
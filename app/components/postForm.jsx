import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLay from "./buttonLay";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import GlobalButton from "./globalButton";

export default function PostForm() {
    return (
        <div className="p-3 bg-white rounded-md">
            <div className="flex flex-col w-full">
                <small className='mb-1 text-zinc-800'>treść posta</small>
                <textarea id="post" name="post" rows="4" cols="50" placeholder={`co tam u Ciebie?`} 
                    className='px-4 py-2 border border-solid border-orange-600 bg-orange-600/30 rounded-md text-md text-zinc-800 placeholder:text-zinc-800/60'
                    />
                <div className="grid grid-cols-5 gap-4 mt-4">
                    <div className="col-span-2 my-auto">           
                        <label class="block mb-2 text-xs font-medium text-gray-900" for="file_input">Dodaj zdjęcie</label>           
                        <input class="p-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                    </div>
                    <div className="col-span-2 my-auto">           
                        <label class="block mb-2 text-xs font-medium text-gray-900" for="file_input">Wybierz film</label>           
                        <input class="p-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                    </div>
                    <div className="ms-auto mt-auto">
                        <GlobalButton label={`Dodaj`}>
                        </GlobalButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
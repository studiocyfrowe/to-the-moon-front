import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlobalButton from "./globalButton";
import logo from '../assets/logo.svg'
import Image from "next/image";

export default function StartNavigation() {
    return (
        <div className="flex flex-row">
            <div>
                <Image src={logo} height={100} alt="Logo"></Image>
            </div>
            <div className="ms-auto my-auto"><GlobalButton label={`Menu`}></GlobalButton></div>
        </div>
    )
}
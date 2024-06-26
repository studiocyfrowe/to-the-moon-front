import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavItem({label}) {
    let hrefLowerCase = label.toLowerCase()
    return (
        <Link href={hrefLowerCase}>
            <div className="flex flex-row py-3 px-4 hover:bg-orange-800/60 rounded-md transition-all">
                <h6 className="text-md my-auto">{label}</h6>
                <FontAwesomeIcon icon={faArrowRight} className="my-auto ms-auto"/>
            </div>
        </Link>
    )
}